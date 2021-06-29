import { useRef } from 'react';
import { useState } from 'react';
import { api } from '../../service/api';
import { Container, Overlay } from './styles';
import Alert from '../Alert';

function CreateGroups({ handleClose }) {
  const [createGroup, setCreateGroup] = useState({
    name: '',
  });
  const [message, setMessage] = useState(undefined);

  const [image, setImage] = useState(null);

  const imageRef = useRef();

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
      setMessage({ title: 'Tudo certo', description: '' });
      setTimeout(() => {
        handleClose();
      }, 1000);
    } catch (error) {
      console.error(error);
      setMessage({
        title: 'Algo deu errado',
        description: 'Nome do grupo não pode ser vazio',
      });
    }
  };

  return (
    <>
      <Overlay>
        <Alert message={message} handleClose={setMessage} />
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
