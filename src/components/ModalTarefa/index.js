import { Container, Overlay } from './styles';
import { AiOutlineUserAdd } from 'react-icons/ai';
import perfil from '../../assets/ImagesPerfis/image_perfil_aluno.jpg';
import ModalCriarTarefa from '../ModalCreateTask';
import { useState } from 'react';
import { api } from '../../service/api';
import { useEffect } from 'react';
function ModalViewTarefa({ handleClose, cardId }) {
  const [modalCriarTarefa, setModalsetCriarTarefa] = useState(false);

  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState([]);
  const [priorities, setPriorities] = useState([]);
  const [cardsInfo, setCardsInfo] = useState([]);

  const loadTasks = async () => {
    try {
      const response = await api.get(`/tasks/${cardId}`);
      console.log(response.data);
      setTasks([...tasks, ...response.data]);
    } catch (error) {
      console.log(error);
    }
  };

  const checkTask = async (e) => {
    try {
      await api.put(`/task/${e.target.defaultValue}`);

      setTasks(tasks.map((t) => t.id == e.target.defaultValue ? {...t, checked : !t.checked}: t))
    } catch (error) {
      console.log(error);
    }
  };

  const loadProgress = async () => {
    try {
      const response = await api.get("/progresses");

      setProgress(response.data);
    } catch (error) {
      alert(error);
    }
  };

  const loadInfoCard = async () => {
    try {
      const response = await api.get("/cards/info/1");

      setCardsInfo(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const loadPriorities = async () => {
    try {
      const response = await api.get("/priorities");

      setPriorities(response.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    loadTasks();
    loadPriorities();
    loadProgress();
    loadInfoCard()
  }, []);

  return (
    <>
      {modalCriarTarefa && (
        <ModalCriarTarefa
          handleClose={() => {
            setModalsetCriarTarefa(false);
          }}
          id={cardId}
        />
      )}
      <Overlay>
        <Container>
          <span onClick={handleClose}>X</span>
          <header>
            <h2>{cardsInfo.description}</h2>
          </header>
          <p>Última alteração há {cardsInfo.updatedAt}</p>
          <div id="addUser">
            <AiOutlineUserAdd />
            <p>Adicionar membros</p>
          </div>
          {cardsInfo.Users?.map((user) => (
            <img src={user.Student.profileImage ||  perfil } alt="imageUser" id="imageUser" />
          ))}
    
          <section>
            <div id="selecetProgresso">
              <h3>Progresso</h3>
              <select className="appearance-select">
              <option value="">Selecione</option>
                {progress.map((progress) => (
                  <option value={progress.id}>{progress.progress}</option>
                ))}
              </select>
            </div>
            <div id="selecetPrioridades">
              <h3>Prioridades</h3>
              <select className="appearance-select">
                <option value="">Selecione</option>
              {priorities.map((priority) => (
                <option value={priority.id}>{priority.priority}</option>
              ))}
              </select>
            </div>
          </section>
          <div id="date">
            <div id="dateStart">
              <h3>Data de início</h3>
              <input type="Date" />
            </div>
            <div id="dateEnd">
              <h3>Data de Termino</h3>
              <input type="Date" />
            </div>
          </div>
          <div id="createTask">
            <h3 onClick={() => setModalsetCriarTarefa(true)}>
              Criar Tarefas + 0/3
            </h3>
            <div id="cheklistCard">
              {tasks.map((task) => (
                <div key={task.id}>
                  <input
                    type="checkbox"
                    name="checkbox"
                    onChange={checkTask}
                    value={task.id}
                    checked={task.checked}
                  />
                  <label for="radio" value={task.id}>
                    {task.task}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Overlay>
    </>
  );
}

export default ModalViewTarefa;
