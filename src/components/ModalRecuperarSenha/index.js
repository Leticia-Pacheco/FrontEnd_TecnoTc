import {
  Overlay,
  ModalRecuperarSenha,
  Header,
  ImageSenha,
  MensagemRecuperacaoSenha,
  InserirEmail,
  ButtonEnviarLink,
} from './styles';
import Logo from '../../assets/logos/logo_fundo_roxo_png.png';
import CadeadoRecSenha from '../../assets/ImagesRecuperarSenha/cadeadoSenha.jpg';
import {Link, useHistory} from 'react-router-dom';
import Input from '../Input';
import {useState} from 'react';
import {api} from '../../service/api';
import {getUser} from '../../service/security';

function RecuperarSenha() {
  const history = useHistory();
  const [userEmail, setUserEmail] = useState('');
  const handleInput = (e) => {
    setUserEmail({...userEmail, [e.target.id]: e.target.value});
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const {email} = userEmail;

      const response = await api.get(`/emailpassword/${email}`);
      console.log(email);
      getUser(response.data);
      history.push('/confirmemail');
    } catch(error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };
  return (
    <>
      <Overlay>
        <ModalRecuperarSenha>
          <Header>
            <img src={Logo} alt="Logo" title="Logo" />
            <h1>Esqueceu sua senha?</h1>
          </Header>

          <ImageSenha>
            <img
              src={CadeadoRecSenha}
              alt="Cadeado senha"
              title="Cadeado senha"
            />
          </ImageSenha>

          <MensagemRecuperacaoSenha>
            <p>
              Está tudo bem! Será enviado um link para o seu e-mail assim que
              digitá-lo para que possa redefinir sua senha!
              </p>
          </MensagemRecuperacaoSenha>

          <InserirEmail onSubmit={handleSubmit}>
            <p>Digite seu email: </p>

            <Input
              id="email"
              value={userEmail.email}
              handler={handleInput}
              type="text"
              placeholder="Insira seu email aqui"
              required>
            </Input>
            <ButtonEnviarLink>
              <button>Enviar link de recuperação</button>
            </ButtonEnviarLink>
          </InserirEmail>

          <Link to="/redefinirsenha"></Link>
        </ModalRecuperarSenha>
      </Overlay>
    </>
  );

}


export default RecuperarSenha;
