import { Container, Overlay } from './styles';
import logo from '../../assets/logos/logo_telas.png';
import { useRef, useState } from 'react';
import Toast from '../../components/Toast';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../../service/api';
import Select from '../Select';
import { useEffect } from 'react';

function CreateSprint({ handleClose, groupId }) {
  const [sprint, setSprint] = useState({
    name: '',
    timeBox: '2021-10-10',
  });

  const [stories, setStories] = useState([]);

  const [storiesSelect, setStoriesSelect] = useState([]);

  const notify = (message, type) => {
    toast[type](message);
  };

  const storiesRef = useRef();

  useEffect(() => {
    const loadStories = async () => {
      const response = await api.get(`/stories/${groupId}`);
      setStories(response.data);
    };
    loadStories();
  }, []);

  const handleStories = (e) => {
    const idSel = e.target.value;

    const storySel = stories.find((s) => s.id.toString() === idSel);

    setStoriesSelect([...storiesSelect, storySel.id]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/sprints/${groupId}`, {
        name: sprint.name,
        timeBox: sprint.timeBox,
        stories: storiesSelect,
      });
      console.log(storiesSelect);

      notify('Sprint criada com sucesso', 'success');
      handleClose();
    } catch (error) {
      console.error(error);
      notify(error.response.data.error, 'error');
    }
  };

  const handleInput = (e) => {
    console.log(e);
    setSprint({ ...sprint, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Overlay>
        <Container>
          <span onClick={handleClose}>X</span>
          <header>
            <img src={logo} alt="logo" />
            <h1>Criar nova Sprint</h1>
          </header>
          <h2>Nome</h2>
          <input
            id="name"
            onChange={handleInput}
            value={sprint.name}
            placeholder="Digite o nome da Spint"
            required
          />
          <h3>Data estimada da Sprint : </h3>
          <div id="date">
            <div id="dateEnd">
              <h3>Data de Termino</h3>
              <input
                type="date"
                id="timebox"
                defaultValue="2021-10-10"
                onChange={handleInput}
                value={sprint.timeBox}
              />
            </div>
          </div>
          <h3>Selecione as histórias da Sprint</h3>
          <Select
            id="categories"
            label="Categorias"
            handler={handleStories}
            ref={storiesRef}
          >
            <option value="">Selecione</option>
            {stories.map((story) => (
              <option key={story.id} value={story.id}>
                {story.description}
              </option>
            ))}
          </Select>
          <div id="btn">
            <button onClick={handleSubmit}>Criar nova Sprint</button>
          </div>
        </Container>
      </Overlay>
    </>
  );
}

export default CreateSprint;
