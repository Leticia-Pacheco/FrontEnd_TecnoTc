import { useState } from 'react';
import Input from '../Input';
import { api } from '../../service/api';
import { Container, Overlay } from './styles';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';

function CreateList({ handleClose, id }) {
  const [message, setMessage] = useState(undefined);

  const [newList, setNewList] = useState({
    name: '',
  });
  const notify = (message, type) => {
    toast[type](message);
  };
  const handleInput = (e) => {
    setNewList({ ...newList, [e.target.id]: e.target.value });
  };
  const handleAddList = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(`/lists/${id}`, {
        name: newList.name,
      });

      setNewList(response.data);
      notify('Lista criada com sucesso', 'success');
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error(error);
      notify(error.response.data.error, 'error');
    }
  };
  return (
    <>
      <Overlay>
        <Toast />

        <Container onSubmit={handleAddList}>
          <span onClick={handleClose}>X</span>
          <h2>Criar uma lista</h2>
          <h3>Titulo da lista</h3>
          <Input
            id="name"
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
