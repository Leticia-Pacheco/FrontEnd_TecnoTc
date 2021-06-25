import {useState} from 'react';
import Input from '../Input';
import {api} from '../../service/api';
import {Container, Overlay} from './styles';
import Alert from '../Alert';

function CreateList({handleClose}) {
  const [message, setMessage] = useState(undefined);

  const [newList, setNewList] = useState({
    name: '',
  });
  const handleInput = (e) => {
    setNewList({...newList, [e.target.id]: e.target.value});
  };
  const handleAddList = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post('/lists/1', {
        name: newList.name
      });

      setNewList(response.data);
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
