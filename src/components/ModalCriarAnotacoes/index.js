import { useState } from 'react';
import Input from '../Input';
import { api } from '../../service/api';
import { Container, Overlay } from './styles';
import { toast } from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';

function CreateAnotacoes({ handleClose }) {
  const [newAnnotation, setAnnotation] = useState({
    title: '',
    text: '',
  });

  const notify = (message, type) => {
    toast[type](message);
  };
  const handleInput = (e) => {
    setAnnotation({ ...newAnnotation, [e.target.id]: e.target.value });
  };
  const handleAddAnnotation = async (e) => {
    e.preventDefault();

    try {
      const { title, text } = newAnnotation;
      const response = await api.post('/annotations', {
        title,
        text,
      });
      setAnnotation(response.data);
      notify('Anotação criada com sucesso', 'success');
      setTimeout(() => {
        handleClose();
      }, 2000);
    } catch (error) {
      console.error(error);
      notify(error.response.data.error, 'error');
    }
  };
  return (
    <>
      <Overlay>
        <Toast />
        <Container onSubmit={handleAddAnnotation}>
          <span onClick={handleClose}>X</span>
          <h2>Criar uma anotação</h2>

          <p>
            As anotações servem para que você se oriente durante o processo de
            construção de seu projeto. Elas são úteis para que não se esqueça
            das tarefas mais importantes! Fique atento!
          </p>

          <h3>Título da anotação:</h3>
          <Input
            id="title"
            placeholder="Digite o título da anotação aqui"
            value={newAnnotation.title}
            handler={handleInput}
            required
          />

          <h3>Descrição:</h3>
          <Input
            id="text"
            handler={handleInput}
            value={newAnnotation.text}
            placeholder="Digite a descrição da anotação aqui"
            required
          ></Input>
          <button>Criar anotação</button>
        </Container>
      </Overlay>
    </>
  );
}

export default CreateAnotacoes;
