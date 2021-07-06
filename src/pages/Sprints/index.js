import {
  Container,
  Content,
  Titulo,
  LogoTecnoTc,
  SelectSprints,
  ContainerSprints,
  SprintBacklog,
  SprintRevew,
  SprintDaily,
} from './styles';
import ImageLogo from '../../assets/logos/logo_fundo_roxo_png.png';
import { api } from '../../service/api';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Sprints() {
  const [sprints, setSprints] = useState([]);
  const [actualSprint, setActualSprint] = useState([]);

  const { groupId } = useParams();

  const history = useHistory();

  const loadSprints = async () => {
    try {
      const response = await api.get(`/sprints/${groupId}`);
      setSprints(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = async (e) => {
    setActualSprint(e.target.value)
  
  };

  const goToDailyScrum = () => {
    history.push(`/dailyScrum/${actualSprint}`);
  };
  const goToSprintReview  = () => {
    history.push(`/sprintReview/${actualSprint}`);
  };
  const goToSprintRetrospective = () => {
    history.push(`/sprintRetrospective/${actualSprint}`);
  };

  useEffect(() => {
    loadSprints();
  }, []);
  return (
    <Container>
      <Content>
        <Titulo>
          <LogoTecnoTc>
            <img src={ImageLogo} alt="Logo" title="Logo" />
          </LogoTecnoTc>
          <h1>Sprints</h1>
        </Titulo>
        <SelectSprints>
          <select id="categories" label="categorias" onChange={handleInput}>
            <option value="">Selecione</option>
            {sprints.map((sprint) => (
              <option value={sprint.id}>{sprint.name}</option>
            ))}
          </select>
        </SelectSprints>
        <ContainerSprints>
          <SprintBacklog onClick={goToDailyScrum}> DailyScrum </SprintBacklog>
          <SprintRevew onClick={goToSprintRetrospective}> SprintRetrospective </SprintRevew>
          <SprintDaily onClick={goToSprintReview}> SprintReview </SprintDaily>
        </ContainerSprints>
      </Content>
    </Container>
  );
}

export default Sprints;
