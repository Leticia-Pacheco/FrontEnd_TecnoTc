import { useState } from 'react';
import Input from '../Input';
import { api } from '../../service/api';
import { Container, Overlay } from './styles';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';

function CreateCard({ handleClose, id }) {
  const [newCard, setNewCard] = useState({
    description: '',
  });
  const notify = (message, type) => {
    toast[type](message);
  };
  const handleInput = (e) => {
    setNewCard({ ...newCard, [e.target.id]: e.target.value });
  };
  const handleAddTask = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(`/cards/${id}`, {
        description: newCard.description,
      });

      setNewCard(response.data);
      notify('Card criado com sucesso', 'success');
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
        <Container onSubmit={handleAddTask}>
          <span onClick={handleClose}>X</span>
          <h2>Criar um card</h2>
          <h3>Titulo do card</h3>
          <Input
            id="description"
            placeholder="Digite o título do card aqui"
            value={newCard.description}
            handler={handleInput}
            required
          />
          <button>Criar um card</button>
        </Container>
      </Overlay>
    </>
  );
}

export default CreateCard;
