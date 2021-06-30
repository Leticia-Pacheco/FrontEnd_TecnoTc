import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { api } from '../../service/api';
import { Container, Conteudo, Form } from './styles';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';
function SprintRetrospective() {
  const [sprintRetrospective, setSprintRetrospective] = useState({
    doneError: '',
    doneRight: '',
    fieldAction: '',
  });

  const [sprint, setSprint] = useState([]);

  const { sprintId } = useParams();

  const history = useHistory();

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
    setSprintRetrospective({
      ...sprintRetrospective,
      [e.target.id]: e.target.value,
    });
  };
  const notify = (message, type) => {
    toast[type](message);
  };
  const createSPrintRetrospective = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post(`/sprintRetrospective/${sprintId}`, {
        doneError: sprintRetrospective.doneError,
        doneRight: sprintRetrospective.doneRight,
        fieldAction: sprintRetrospective.fieldAction,
      });
      notify('sucesso', 'success');
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
          <h1>Sprint Retrospective</h1>

          <p>Preencha corretamente todos os campos.</p>

          <span>Nome do projeto : {sprint.name}</span>

          <span>O que foi feito?</span>
          <textarea
            id="doneRight"
            placeholder="Escreva aqui o que foi feito com êxito"
            onChange={handleInput}
          />

          <span>O que não foi feito?</span>
          <textarea
            id="doneError"
            placeholder="Escreva aqui o que não foi feito"
            onChange={handleInput}
          />

          <span>Plano de ação</span>
          <textarea
            id="fieldAction"
            placeholder="Escreva aqui o plano de ação"
            onChange={handleInput}
          />

          <button onClick={createSPrintRetrospective}>
            Enviar Sprint Retrospective!
          </button>
        </Conteudo>
      </Form>
    </Container>
  );
}

export default SprintRetrospective;
