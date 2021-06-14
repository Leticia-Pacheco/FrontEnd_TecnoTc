import React, {useState} from 'react';
import {Container, Content} from './styles';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import imgHomeFeed from '../../assets/ImagesPerfis/home_feed.png';
import logo from '../../assets/logos/logo_fundo_roxo_png.png';
import perfil from '../../assets/ImagesPerfis/image_perfil_aluno.jpg';
import {api} from '../../service/api';
import {useEffect} from 'react';
import {useParams} from 'react-router';
import ModalCreateTask from '../../components/ModalCriarTarefa';
import ModalCreateList from '../../components/ModalCriarLista';

function Workspace() {
  const [columns, setColumns] = useState([]);
  const [modalCriarTarefa, setModalCriarTarefa] = useState(false);
  const [modalCreateList, setModalCreateList] = useState(false);
  const {workspaceId} = useParams();

  const updateOrderCard = async ({id, order, listId}) => {
    const convertToInt = parseInt(id);

    const response = await api.put(`/cards/order/${convertToInt}/${listId}`, {
      order: order + 1,
    });
  };

  const updateCardList = async ({cardId, listId}) => {
    const response = await api.put(`/cards/list/${cardId}/${listId + 1}`);
  };

  const onDragEnd = (result, columns, setColumns) => {
    if(!result.destination) return;

    const {source, destination, draggableId} = result;
    //console.log(result);

    if(source.droppableId !== destination.droppableId) {
      //A LISTA QUE ESTOU ATUALMENTE
      const sourceColumn = columns[source.droppableId];

      //RETORNA A LISTA PARA QUAL EU VOU
      const destColumn = columns[destination.droppableId];
      //console.log(destColumn);

      //RETORNA O QUE SOBROU DE UMA LISTA
      const sourceItems = [...sourceColumn.Cards];
      //console.log(sourceItems);

      //RETORNA UM ARRAY COM TUDO DE NOVO DA NOVA LISTA
      const destItems = [...destColumn.Cards];
      //console.log(destItems);

      //REMOVE UM ELEMENTO DA LISTA
      const [removed] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        //seta as colunas retornando tudo da lista que estou atualmente mais o que vem de noovo
        [source.droppableId]: {
          ...sourceColumn,
          Cards: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          Cards: destItems,
        },
      });

      updateCardList({cardId: draggableId, listId: destination.droppableId});
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

  const loadColumns = async () => {
    try {
      const response = await api.get(`/lists/${workspaceId}`);
      console.log(response.data);
      setColumns(response.data);
    } catch(error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadColumns();
  }, []);

  return (
    <>
      {modalCriarTarefa && (
        <ModalCreateTask
          handleClose={() => {
            setModalCriarTarefa(false);
          }}
        />
      )}
      {modalCreateList && (
        <ModalCreateList
          handleClose={() => {
            setModalCreateList(false);
          }}
        />
      )}
      <Container>
        <header>
          <img src={imgHomeFeed} alt="home" id="home" />
          <img src={logo} alt="logo" id="logo" />
          <img src={perfil} alt="profileUser" className="profileUser" />
        </header>
        <div id="sub-menu">
          <h3>Nome Grupo</h3>
          <article>
            <img src={perfil} alt="profileUser" className="profileUser" />
            <img src={perfil} alt="profileUser" className="profileUser" />
            <div>Convidar</div>
          </article>
        </div>

        <Content>
          <section>
            <h3>Nome da Lista</h3>
            <div onClick={() => setModalCreateList(true)}>+ Adicionar nova lista</div>
          </section>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <DragDropContext
              onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
            >
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <div onClick={() => setModalCriarTarefa(true)}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                    key={columnId}
                  >
                    <h2>{column.name}</h2>
                    <div style={{margin: 8}}>
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
