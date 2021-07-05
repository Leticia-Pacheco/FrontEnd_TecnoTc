import {
  Container,
  ContainersCheck,
  Header,
  Informacoes,
  Overlay,
  InputAddStory,
} from './styles';
import ImageLogo from '../../assets/logos/logo_fundo_roxo_chapeu.png';
import ImageTarefasFeitas from '../../assets/ImagesCheckListProject/funcionalidades_feitas.png';
import ImageTarefasEmEspera from '../../assets/ImagesCheckListProject/funcionalidades_em_espera.png';
import { api } from '../../service/api';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';

function ChecklistProject({ groupId }) {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState([]);

  const loadStories = async () => {
    try {
      const response = await api.get(`/stories/${groupId}`);
      setStories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddStory = async (e) => {
    e.preventDefault();

    const notify = (message, type) => {
      toast[type](message);
    };

    if (newStory.length < 10) return notify('Mínimo de 10 Caracter', 'error');

    try {
      const response = await api.post(`/stories/${groupId}`, {
        description: newStory,
        priority: 1,
      });

      const storyAdd = {
        id: response.data.id,
        description: newStory,
        checked: false,
        createdAt: response.data.createdAt,
      };

      notify('História criada com sucesso', 'sucess');

      setStories([...stories, storyAdd]);

      setNewStory('');
    } catch (error) {
      console.log(error);
      notify(error.response.data.error, 'error');
    }
  };

  const checkStorie = async (e) => {
    try {
      await api.put(`/stories/${e.target.defaultValue}`);
      setStories(
        stories.map((story) =>
          story.id == e.target.defaultValue
            ? { ...story, checked: !story.checked }
            : story
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    setNewStory({ ...newStory, [e.target.id]: e.target.value });
  };

  useEffect(() => {
    loadStories();
  }, []);

  return (
    <>
      <Overlay>
        <Toast />
        <Container>
          <Header>
            <img
              src={ImageLogo}
              alt="Logo da empresa"
              title="Logo da empresa"
            />
            <h1>Checklist do Projeto</h1>
          </Header>

          <Informacoes>
            <ContainersCheck>
              <h3>Todas as histórias</h3>

              <ul>
                {stories.map((story) => (
                  <>
                    {story.checked === false && (
                      <li key={story.id}>
                        <input
                          type="checkbox"
                          name="stories"
                          onChange={checkStorie}
                          value={story.id}
                          checked={story.checked}
                        />
                        <p>
                          {story.checked === false ? story.description : ''}
                        </p>
                      </li>
                    )}
                  </>
                ))}
                <form onSubmit={handleAddStory}>
                  <InputAddStory
                    type="text"
                    placeholder="Digite aqui uma nova história"
                    value={newStory}
                    onChange={(e) => setNewStory(e.target.value)}
                  />
                </form>
              </ul>
            </ContainersCheck>
            <ContainersCheck>
              <ul>
                <li>
                  <img
                    id="ImageTarefasEmEspera"
                    src={ImageTarefasEmEspera}
                    alt="Em espera"
                    title="Em espera"
                  />
                  <h3>Tarefas concluidas</h3>
                </li>
              </ul>

              <ul>
                {stories.map((story) => (
                  <>
                    {story.checked === true && (
                      <li>
                        <img
                          src={ImageTarefasFeitas}
                          alt="Feito"
                          title="Feito"
                        />
                        <p>{story.checked === true ? story.description : ''}</p>
                      </li>
                    )}
                  </>
                ))}
              </ul>
            </ContainersCheck>
          </Informacoes>
          <button>Feito!</button>
        </Container>
      </Overlay>
    </>
  );
}

export default ChecklistProject;
