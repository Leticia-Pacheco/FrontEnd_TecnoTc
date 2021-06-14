import {useState} from 'react';
import Input from '../Input';
import {api} from '../../service/api';
import {Container, Overlay} from './styles';

function CreateList({handleClose}) {
  const [newList, setNewList] = useState({
    name: '',
  });
  const handleInput = (e) => {
    setNewList({...newList, [e.target.id]: e.target.value});
  };
  const handleAddList = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post('/list/1', {
        name : newList.name
      });

      setNewList(response.data);
      handleClose();
    } catch(error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };
  return (
    <>
      <Overlay>
        <Container onSubmit={handleAddList}>
          <span onClick={handleClose}>X</span>
          <h2>Criar uma lista</h2>
          <h3>Titulo da lista</h3>
          <Input
            id="title"
            placeholder="Digite o título da lista aqui"
            value={newList.name}
            handler={handleInput}
            required
          />
          <button>Criar Tarefa</button>
        </Container>
      </Overlay>
    </>
  );
}

export default CreateList;
