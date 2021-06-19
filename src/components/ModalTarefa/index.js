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
  const [taskChecked, setTaskChecked] = useState([]);

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
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      {modalCriarTarefa && (
        <ModalCriarTarefa
          handleClose={() => {
            setModalsetCriarTarefa(false);
          }}
        />
      )}
      <Overlay>
        <Container>
          <span onClick={handleClose}>X</span>
          <header>
            <img src="" alt="state"></img>
            <h2>Wiresframes</h2>
          </header>
          <p>Última alteração há 4 dias feita por Fulana</p>
          <div id="addUser">
            <AiOutlineUserAdd />
            <p>Adicionar membros</p>
          </div>
          <img src={perfil} alt="imageUser" id="imageUser" />
          <section>
            <div id="selecetBucket">
              <h3>Bucket</h3>
              <select className="appearance-select">
                <option value="">Sprint Backlog</option>
                <option value="">Em análise</option>
                <option value="">Em desenvolvimento </option>
                <option value="">Em teste</option>
                <option value="">Feito</option>
              </select>
            </div>
            <div id="selecetProgresso">
              <h3>Progresso</h3>
              <select className="appearance-select">
                <option value="">Não iniciada</option>
                <option value="">Em andamento</option>
                <option value="">Concluida </option>
              </select>
            </div>
            <div id="selecetPrioridades">
              <h3>Prioridades</h3>
              <select className="appearance-select">
                <option value="">Urgente</option>
                <option value="">Importante</option>
                <option value="">Média</option>
                <option value="">Baixa</option>
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
