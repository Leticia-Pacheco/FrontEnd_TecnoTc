import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { api } from '../../service/api';
import Input from '../Input';
import { Container, Overlay } from './styles';
import Alert from '../Alert';

function InviteStudent({ handleClose }) {
  const [sendInvite, setSendInvite] = useState({
    email: '',
  });
  const [message, setMessage] = useState(undefined);

  const { id } = useParams();

  const inputSendInvite = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post(`/group/${id}/invite`, {
        emailSend: sendInvite.email,
      });
      
      setMessage({ title: 'Tudo certo', description: 'Reunião diaria criada' });

      handleClose();
    } catch (error) {
      console.log(error);
      setMessage({title: 'Ops...', description: error.response.data.error});
    }
  };

  const handleInput = (e) => {
    setSendInvite({ ...sendInvite, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Alert message={message} type="error" handleClose={setMessage} />
      <Overlay>
        <Container>
          <span onClick={handleClose}>X</span>
          <h2>Convidar um Aluno</h2>
          <h3>E-mail do aluno</h3>
          <Input
            id="email"
            handler={handleInput}
            type="email"
            placeholder="Digite o e-mail do estudante"
            value={sendInvite.email}
            required
          />
          <button onClick={inputSendInvite}>Convidar</button>
        </Container>
      </Overlay>
    </>
  );
}

export default InviteStudent;
