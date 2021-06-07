import React, {useState} from 'react';
import uuid from 'uuid/dist/v4';
import {Container, Content} from './styles';
import {DragDropContext, Droppable, Draggable} from 'react-beautiful-dnd';
import imgHomeFeed from '../../assets/ImagesPerfis/home_feed.png';
import logo from '../../assets/logos/logo_fundo_roxo_png.png';
import perfil from '../../assets/ImagesPerfis/image_perfil_aluno.jpg';

const itemsFromBackend = [
  {id: uuid(), content: "First task"},
  {id: uuid(), content: "Second task"},
  {id: uuid(), content: "Third task"},
  {id: uuid(), content: "Fourth task"},
  {id: uuid(), content: "Fifth task"},
  {id: uuid(), content: "6 task"},
  {id: uuid(), content: "7 task"},
  {id: uuid(), content: "8 task"},
  {id: uuid(), content: "9 task"},
  {id: uuid(), content: "10 task"}
];

const columnsFromBackend = {
  [uuid()]: {
    name: "Requested",
    items: itemsFromBackend
  },
  [uuid()]: {
    name: "To do",
    items: []
  },
  [uuid()]: {
    name: "In Progress",
    items: []
  },
  [uuid()]: {
    name: "Done",
    items: []
  }
};

const onDragEnd = (result, columns, setColumns) => {
  if(!result.destination) return;
  const {source, destination} = result;

  if(source.droppableId !== destination.droppableId) {
    const sourceColumn = columns[source.droppableId];
    const destColumn = columns[destination.droppableId];
    const sourceItems = [...sourceColumn.items];
    const destItems = [...destColumn.items];
    const [removed] = sourceItems.splice(source.index, 1);
    destItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...sourceColumn,
        items: sourceItems
      },
      [destination.droppableId]: {
        ...destColumn,
        items: destItems
      }
    });
  } else {
    const column = columns[source.droppableId];
    const copiedItems = [...column.items];
    const [removed] = copiedItems.splice(source.index, 1);
    copiedItems.splice(destination.index, 0, removed);
    setColumns({
      ...columns,
      [source.droppableId]: {
        ...column,
        items: copiedItems
      }
    });
  }
};


function Workspace() {
  const [columns, setColumns] = useState(columnsFromBackend);
  return (
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
          <h3>Nome da Tarefa</h3>
          <div>+ Adicionar nova tarefa</div>
          <div>+ Adicionar outra lista</div>
        </section>
        <div style={{display: "flex", justifyContent: "space-between", height: "100%"}}>
          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
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
                                ? "lightblue"
                                : "lightgrey",
                              padding: 4,
                              width: 300,
                              minHeight: 400
                            }}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        style={{
                                          userSelect: "none",
                                          padding: 16,
                                          margin: "0 0 8px 0",
                                          minHeight: "50px",
                                          backgroundColor: snapshot.isDragging
                                            ? "#fff"
                                            : "#a2a6a3",
                                          color: "black",
                                          fontSize: 16,
                                          ...provided.draggableProps.style
                                        }}
                                      >
                                        {item.content}
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
    </Container >
  );
}

export default Workspace;
