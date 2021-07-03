import {useState} from 'react';
import {useParams} from 'react-router-dom';
import {api} from '../../service/api';
import Input from '../Input';
import {Container, Overlay} from './styles';
import {toast} from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';

function InviteStudent({handleClose, setIsLoading}) {
  const [sendInvite, setSendInvite] = useState({
    email: '',
  });

  const {id} = useParams();

  const notify = (message, type) => {
    toast[type](message);
  };
  const inputSendInvite = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await api.post(`/group/${id}/invite`, {
        emailSend: sendInvite.email,
      });
      notify('Convite enviado', 'success');

      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch(error) {
      console.log(error);
      setIsLoading(false);
      notify(error.response.data.error, 'error');
    }
  };

  const handleInput = (e) => {
    setSendInvite({...sendInvite, [e.target.id]: e.target.value});
  };

  return (
    <>
      <Overlay>
        <Toast />
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
