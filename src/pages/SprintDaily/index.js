import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { api } from '../../service/api';
import { Container, Conteudo, Form } from './styles';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';

function SprintDaily() {
  const [sprintDaily, setSprintDaily] = useState({
    doneYesterday: '',
    goingToDoDay: '',
    someObstacle: '',
  });

  const [sprint, setSprint] = useState([]);

  const { sprintId } = useParams();

  const history = useHistory();

  const findSprint = async () => {
    const response = await api.get(`/sprint/${sprintId}`);

    if (!response.data) return history.push('/profile');
    setSprint(response.data.Group);

  };

  useEffect(() => {
    findSprint();
  }, []);

  const notify = (message, type) => {
    toast[type](message);
  };
  const handleInput = (e) => {
    setSprintDaily({ ...sprintDaily, [e.target.id]: e.target.value });
  };

  const createSprintDaily = async (e) => {
    e.preventDefault();

    try {
      await api.post(`/dailyScrum/${sprintId}`, {
        doneYesterday: sprintDaily.doneYesterday,
        goingToDoDay: sprintDaily.goingToDoDay,
        someObstacle: sprintDaily.someObstacle,
      });

      notify('Reunião diaria criada com successo', 'success');

      setTimeout(() => {
        history.goBack();
      }, 1000);
    } catch (error) {
      console.error(error);
      notify(error.response.data.error, 'error');
    }
  };

  return (
    <Container>
      <Toast />
      <Form>
        <Conteudo>
          <h1>Sprint Diária</h1>

          <p>Preencha corretamente todos os campos.</p>

          <span>Nome do projeto</span>
          <input type="text" value={sprint.name} />

          <span>O que você fez ontem?</span>
          <textarea
            id="doneYesterday"
            placeholder="Escreva aqui o que foi feito ontem por você"
            onChange={handleInput}
          />

          <span>O que fará hoje?</span>
          <textarea
            id="goingToDoDay"
            placeholder="Escreva aqui o que você fará hoje"
            onChange={handleInput}
          />

          <span>Houve algum conflito em seu grupo?</span>
          <textarea
            id="someObstacle"
            placeholder="Escreva aqui se houve algum conflito em seu grupo"
            onChange={handleInput}
          />

          <button onClick={createSprintDaily}>Enviar sua Sprint Diária!</button>
        </Conteudo>
      </Form>
    </Container>
  );
}

export default SprintDaily;
