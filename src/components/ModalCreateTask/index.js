import {useState} from 'react';
import Input from '../Input';
import {api} from '../../service/api';
import {Container, Overlay} from './styles';
import {toast} from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';

function CreateTask({handleClose, cardId, setIsLoading}) {

  const [newTask, setnewTask] = useState({
    task: '',
  });
  const notify = (message, type) => {
    toast[type](message);
  };
  const handleInput = (e) => {
    setnewTask({...newTask, [e.target.id]: e.target.value});
  };
  const handleAddTask = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      const response = await api.post(`/task/${cardId}`, {
        task: newTask.task,
      });

      setnewTask(response.data);
      notify('Tarefa criada com sucesso', 'success');
      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch(error) {
      console.error(error);
      setIsLoading(false);
      notify(error.response.data.error, 'error');
    }
  };
  return (
    <>
      <Overlay>
        <Toast />
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
