import { useRef } from 'react';
import { useState } from 'react';
import { api } from '../../service/api';
import { Container, Overlay } from './styles';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';
function CreateGroups({ handleClose }) {
  const [createGroup, setCreateGroup] = useState({
    name: '',
  });

  const [image, setImage] = useState(null);

  const imageRef = useRef();

  const notify = (message, type) => {
    toast[type](message);
  };

  const handleImage = (e) => {
    if (e.target.files[0]) {
      imageRef.current.src = URL.createObjectURL(e.target.files[0]);
      imageRef.current.style.display = 'flex';
    } else {
      imageRef.current.src = '';
      imageRef.current.style.display = 'none';
    }
    setImage(e.target.files[0]);
  };

  const handleInput = async (e) => {
    setCreateGroup({ ...createGroup, [e.target.id]: e.target.value });
  };

  const handleCreateGroup = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append('name', createGroup.name);

    if (image) data.append('image', image);

    try {
      console.log(data);
      await api.post('/group', data, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });

      notify('O seu grupo foi criado com sucesso', 'success');
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      console.error(error);
      notify(error.response.data.error, 'error');
    }
  };

  return (
    <>
      <Overlay>
        <Toast />
        <Container>
          <span onClick={handleClose}>X</span>
          <h2>Criar um grupo</h2>

          <p>
            Crie sua equipe para que trabalhem em harmonia, mantendo uma boa
            comunicação e foco em seu projeto. Temos certeza que será eficaz!
          </p>

          <h3>Nome do grupo:</h3>
          <input
            type="text"
            id="name"
            value={createGroup.name}
            onChange={handleInput}
            placeholder="Digite o nome do grupo aqui"
          />

          <h3>Escolha uma foto para identificação do grupo:</h3>
          {/* <label for="arquivo">Adicionar imagem</label> */}
          <input type="file" onChange={handleImage} />
          <img alt="pré-visualização" ref={imageRef} />
          <button onClick={handleCreateGroup}>Criar grupo</button>
        </Container>
      </Overlay>
    </>
  );
}

export default CreateGroups;
