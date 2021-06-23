import React, { useState } from 'react';
import { Container, Content } from './styles';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import imgHomeFeed from '../../assets/ImagesPerfis/home_feed.png';
import logo from '../../assets/logos/logo_fundo_roxo_png.png';
import perfil from '../../assets/ImagesPerfis/image_perfil_aluno.jpg';
import { api } from '../../service/api';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import ModalCreateList from '../../components/ModalCriarLista';
import ModalTask from '../../components/ModalTarefa';
import ModalInviteStudent from '../../components/ModalConvidarAluno';
import CreateCard from '../../components/ModalCreateCard';
import { getUser } from '../../service/security';
import { Link } from 'react-router-dom';

function Workspace() {
  const [columns, setColumns] = useState([]);

  const [modalCreateCard, setModalCreateCard] = useState(false);

  const [modalCreateList, setModalCreateList] = useState(false);

  const [modalConvidarAluno, setModalConvidarAluno] = useState(false);

  const [reload, setReload] = useState(null);

  const [modalCard, setModalCard] = useState(false);

  const [card, setCard] = useState([]);

  const [userImages, setUserImages] = useState([]);

  const [groupInfo, setGroupInfo] = useState([]);

  const { workspaceId } = useParams();

  const { id } = useParams();

  const user = getUser();

  const updateOrderCard = async ({ id, order, listId }) => {
    const convertToInt = parseInt(id);

    const response = await api.put(`/cards/order/${convertToInt}/${listId}`, {
      order: order + 1,
    });
  };

  const updateCardList = async ({ cardId, listId }) => {
    const response = await api.put(`/cards/list/${cardId}/${listId + 1}`);
  };

  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;

    const { source, destination, draggableId } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];

      const destColumn = columns[destination.droppableId];

      const sourceItems = [...sourceColumn.Cards];

      const destItems = [...destColumn.Cards];

      const [removed] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          Cards: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          Cards: destItems,
        },
      });

      updateCardList({ cardId: draggableId, listId: destination.droppableId });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.Cards];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          Cards: copiedItems,
        },
      });

      updateOrderCard({
        id: draggableId,
        order: destination.index,
        listId: column.id,
      });
    }
  };

  const handleReload = () => {
    setColumns([]);
    setReload(Math.random());
  };

  const loadColumns = async () => {
    try {
      const response = await api.get(`/lists/${workspaceId}`);
      setColumns(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const loadUserGroup = async () => {
    try {
      const response = await api.get(`/group/users/${id}`);
      setUserImages(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadNameGroup = async () => {
    try {
      const response = await api.get(`/group/${id}`);
      setGroupInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenCardInfo = async (e) => {
    console.log(e);
    setModalCard(true);
    setCard(e);
  };

  useEffect(() => {
    loadColumns();
    loadUserGroup();
    loadNameGroup();
  }, []);

  return (
    <>
      {modalConvidarAluno && (
        <ModalInviteStudent
          handleClose={() => {
            setModalConvidarAluno(false);
          }}
        />
      )}
      {modalCard && (
        <ModalTask
          handleClose={() => {
            setModalCard(false);
          }}
          handleReload={handleReload}
          cardId={card}
        />
      )}
      {modalCreateList && (
        <ModalCreateList
          handleClose={() => {
            setModalCreateList(false);
            loadColumns();
          }}
        />
      )}
      {modalCreateCard && (
        <CreateCard
          handleClose={() => {
            setModalCreateCard(false);
          }}
        />
      )}
      <Container>
        <header>
          <Link to={'/feed'}>
            <img src={imgHomeFeed} alt="home" id="home" />
          </Link>
          <img src={logo} alt="logo" id="logo" />
          <img
            src={user.student.profileImage || perfil}
            alt="profileUser"
            className="profileUser"
          />
        </header>
        <div id="sub-menu">
          <h3>{groupInfo.name}</h3>
          <article>
            {userImages.map((image) => (
              <img
                src={image.profileImage || perfil}
                alt="profileUser"
                className="profileUser"
              />
            ))}

            <div onClick={() => setModalConvidarAluno(true)}>Convidar</div>
          </article>
        </div>

        <Content>
          <section>
            <h3>Nome da Lista</h3>
            <div onClick={() => setModalCreateList(true)}>
              + Adicionar nova lista
            </div>
            <div onClick={() => setModalCreateCard(true)}>+ Criar um card</div>
          </section>
          <div
            style={{
              overflowY: 'hidden',
              width: '90%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    key={columnId}
                  >
                    <h2
                      style={{
                        textAlign: 'left',
                        fontSize: '1.3rem',
                      }}
                    >
                      {column.name}
                      <span
                        style={{
                          marginLeft: '10px',
                          fontSize: '1.3rem',
                        }}
                        onClick={() => setModalCreateCard(true)}
                      >
                        +
                      </span>
                    </h2>
                    <div style={{ margin: 8 }}>
                      <Droppable droppableId={columnId} key={columnId}>
                        {(provided, snapshot) => {
                          return (
                            <div
                              {...provided.droppableProps}
                              ref={provided.innerRef}
                              style={{
                                background: snapshot.isDraggingOver
                                  ? 'lightblue'
                                  : 'lightgrey',
                                padding: 4,
                                width: 300,
                                minHeight: 400,
                              }}
                            >
                              {column.Cards.map((item, index) => {
                                return (
                                  <Draggable
                                    key={item.id}
                                    draggableId={item.id.toString()}
                                    index={index}
                                  >
                                    {(provided, snapshot) => {
                                      return (
                                        <div
                                          onDoubleClick={() =>
                                            handleOpenCardInfo(item.id)
                                          }
                                          ref={provided.innerRef}
                                          {...provided.draggableProps}
                                          {...provided.dragHandleProps}
                                          style={{
                                            userSelect: 'none',
                                            padding: 16,
                                            margin: '0 0 8px 0',
                                            minHeight: '50px',
                                            backgroundColor: snapshot.isDragging
                                              ? '#fff'
                                              : '#a2a6a3',
                                            color: 'black',
                                            fontSize: 16,
                                            ...provided.draggableProps.style,
                                          }}
                                        >
                                          {item.description}
                                        </div>
                                      );
                                    }}
                                  </Draggable>
                                );
                              })}
                              {provided.placeholder}
                            </div>
                          );
                        }}
                      </Droppable>
                    </div>
                  </div>
                );
              })}
            </DragDropContext>
          </div>
        </Content>
      </Container>
    </>
  );
}

export default Workspace;
