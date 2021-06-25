import {useState} from 'react';
import Input from '../Input';
import {api} from '../../service/api';
import {Container, Overlay} from './styles';
import Alert from '../Alert';

function CreateCard({handleClose, id}) {
  const [message, setMessage] = useState(undefined);

  const [newCard, setNewCard] = useState({
    description: '',
  });
  const handleInput = (e) => {
    setNewCard({...newCard, [e.target.id]: e.target.value});
  };
  const handleAddTask = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post(`/cards/${id}`, {
        description: newCard.description,
      });

      setNewCard(response.data);
      setMessage({title: 'Tudo certo', description: ''});
      handleClose();
    } catch(error) {
      console.error(error);
      setMessage({title: 'Ops...', description: error.response.data.error});
    }
  };
  return (
    <>
      <Overlay>
        <Alert message={message} type="error" handleClose={setMessage} />
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
