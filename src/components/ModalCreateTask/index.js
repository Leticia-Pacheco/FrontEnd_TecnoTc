import {useState} from 'react';
import Input from '../Input';
import {api} from '../../service/api';
import {Container, Overlay} from './styles';
import Alert from '../Alert';

function CreateTask({handleClose, cardId}) {
   const [message, setMessage] = useState(undefined);

  const [newTask, setnewTask] = useState({
    task: '',
  });
  const handleInput = (e) => {
    setnewTask({...newTask, [e.target.id]: e.target.value});
  };
  const handleAddTask = async (e) => {
    e.preventDefault();

    try {

      const response = await api.post(`/task/${cardId}`, {
        task: newTask.task,
      });

      setnewTask(response.data);
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
            id="task"
            placeholder="Digite o título da tarefa aqui"
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
