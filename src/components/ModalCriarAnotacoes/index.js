<<<<<<< HEAD
import { Link } from "react-router-dom";
import { Container, Overlay } from "../ModalCriarAnotacoes/styles";

function CreateAnotacoes () {
    return(
        <>
            <Overlay>
                <Container>
                    <h2>Criar uma anotação</h2>

                    <p>As anotações servem para que você se oriente durante o processo de construção de seu projeto. 
                       Elas são úteis para que não se esqueça das tarefas mais importantes! Fique atento!</p>

                    <span>Título da anotação:</span>
                    <input type="text" placeholder="Digite o título da anotação aqui"/>

                    <span>Descrição:</span>
                    <textarea rows="7" cols="100" placeholder="Digite a descrição da anotação aqui"></textarea>
                    <button>
                        <Link to="/profileteacher">
                            Criar anotação
                        </Link>
                    </button>
                </Container>
            </Overlay>
        </>
    )
=======
import {useState} from 'react';
import Input from '../Input';
import {api} from '../../service/api';
import {Container, Overlay} from './styles';
import Alert from '../Alert';

function CreateAnotacoes({handleClose}) {
  const [message, setMessage] = useState(undefined);

  const [newAnnotation, setAnnotation] = useState({
    title: '',
    text: '',
  });
  const handleInput = (e) => {
    setAnnotation({...newAnnotation, [e.target.id]: e.target.value});
  };
  const handleAddAnnotation = async (e) => {
    e.preventDefault();

    try {
      const {title, text} = newAnnotation;

      const response = await api.post('/annotations', {
        title,
        text,
      });
      setAnnotation(response.data);
      setMessage({title: 'Tudo certo', description: "Anotação criada"});
      handleClose();
    } catch(error) {
      console.error(error);
      setMessage({title: 'Ops...', description: error.response.data.error});
    }
  };
  return (
    <>

      <Overlay>
        <Alert message={message} type="error" handleClose={setMessage} />
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
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
}

export default CreateAnotacoes;