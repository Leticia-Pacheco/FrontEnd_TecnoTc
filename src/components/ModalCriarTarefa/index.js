import {useState} from 'react';
import Input from '../Input';
import {api} from '../../service/api';
import {Container, Overlay} from './styles';
import Alert from '../Alert';

function CreateTask({handleClose}) {
  const [message, setMessage] = useState(undefined);

  const [newTask, setNewTask] = useState({
    task: '',
  });
  const handleInput = (e) => {
    setNewTask({...newTask, [e.target.id]: e.target.value});
  };
  const handleAddTask = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post('/task/:cardId', {
        task: newTask.task,
      });

      setNewTask(response.data);
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
          <h2>Criar uma tarefa</h2>
          <h3>Titulo da tarefa</h3>
          <Input
            id="title"
            placeholder="Digite o título do card aqui"
            value={newTask.task}
            handler={handleInput}
            required
          />
          <button>Criar uma tarefa</button>
        </Container>
      </Overlay>
    </>
  );
}

export default CreateTask;
