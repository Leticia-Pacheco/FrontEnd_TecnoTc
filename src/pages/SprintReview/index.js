import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { api } from '../../service/api';
import { Container, Conteudo, Form } from './styles';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';

function SprintReview() {
  const [sprintReview, setSprintReview] = useState({
    wasDelivered: '',
    feedback: '',
  });

  const [sprint, setSprint] = useState([]);

  const { sprintId } = useParams();

  const history = useHistory();

  const notify = (message, type) => {
    toast[type](message);
  };
  const findSprint = async () => {
    const response = await api.get(`/sprints/${sprintId}`);
    console.log(response.data);

    if (!response.data) return history.push('/profile');
    setSprint(response.data.Group);

    console.log(response.data.Group);
  };

  useEffect(() => {
    findSprint();
  }, []);

  const handleInput = (e) => {
    setSprintReview({ ...sprintReview, [e.target.id]: e.target.value });
  };

  const createSprintReview = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(`/sprintReview/${sprintId}`, {
        wasDelivered: sprintReview.wasDelivered,
        feedback: sprintReview.feedback,
      });

      notify('Anotação criada com sucesso', 'success');
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
          <h1>Sprint Review</h1>

          <p>Preencha corretamente todos os campos.</p>

          <span>Nome do projeto : {sprint.name}</span>

          <span>Funcionalidades entregues</span>
          <textarea
            id="wasDelivered"
            onChange={handleInput}
            placeholder="Escreva aqui as funcionalidades entregues"
          />

          <span>Feedback</span>
          <textarea
            id="feedback"
            onChange={handleInput}
            placeholder="Escreva aqui o que não foi feito"
          />

          <button onClick={createSprintReview}>
            Enviar sua Sprint Review!
          </button>
        </Conteudo>
      </Form>
    </Container>
  );
}

export default SprintReview;
