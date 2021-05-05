import {
  ApresentacaoEmpresa,
  Container,
  LoginEnter,
<<<<<<< HEAD
  Logo,
  ConfirmLogin,
  BoasVindas,
  InputsLogin,
  IconLock,
  IconEmail,
  RedefinirSenha,
=======
  ConfirmLogin,
  BoasVindas,
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
  InputLogar,
  TextCadastro,
  GifColorLogin,
  GifImageLogin,
<<<<<<< HEAD
=======
  InputsLogin,
  IconLock,
  IconEmail,
  RedefinirSenha,
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
} from './styles';
import GifColor from '../../assets/ImagesLogin/GifColor.gif';
import ImageLogin from '../../assets/ImagesLogin/ImageLogin.gif';
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import { useState } from 'react';
import { api } from '../../service/api';
import { signIn } from '../../service/security';
import Alert from '../../components/Alert';
<<<<<<< HEAD
=======
import Logo from '../../components/Logo';
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb

function Login() {
  const history = useHistory();

  const [message, setMessage] = useState(undefined);

  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/login', login);

      signIn(response.data);

      history.push('/home');
    } catch (error) {
      console.error(error);
      setMessage({ title: 'Ops...', description: error.response.data.error });
    }
  };

  const handleInput = (e) => {
    setLogin({ ...login, [e.target.id]: e.target.value });
  };

  return (
    <>
      <Alert message={message} type="error" handleClose={setMessage} />

      <Container>
        <LoginEnter>
          <Logo>
            {' '}
            <p>Logo da empresa</p>{' '}
          </Logo>
          <ConfirmLogin>
            <ApresentacaoEmpresa>
              <p>
                Nós somos <span>TecnoTc!</span>
              </p>
            </ApresentacaoEmpresa>
            <BoasVindas>
              <p>Seja bem vinda(o) de volta</p>
            </BoasVindas>

            <InputsLogin onSubmit={handleSubmit}>
              <p>Email</p>
              <Input
                id="email"
                type="email"
                handler={handleInput}
                value={login.email}
                placeholder="Digite aqui seu email"
              />
              <IconEmail />

              <p>Senha</p>
              <Input
                id="password"
                type="password"
                value={login.password}
                handler={handleInput}
                placeholder="Digite aqui seu email"
              />
              <IconLock />

              <RedefinirSenha>
<<<<<<< HEAD
                <p>Esqueci a senha</p>
=======
                <Link to="/recuperarsenha">
                  <p>Esqueci a senha</p>
                </Link>
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
              </RedefinirSenha>
              <InputLogar>
                <p>Login</p>
              </InputLogar>
            </InputsLogin>

            <TextCadastro>
              <p>
                Não tem uma conta?{' '}
                <Link to="/Register">
                  <span>Cadastre-se!</span>
                </Link>
              </p>
            </TextCadastro>
          </ConfirmLogin>
        </LoginEnter>

        <GifImageLogin>
          <img src={ImageLogin} alt="Imagem animada" title="Imagem animada" />
        </GifImageLogin>
        <GifColorLogin>
          <img src={GifColor} alt="Imagem animada" title="Imagem animada" />
        </GifColorLogin>
      </Container>
    </>
  );
}

export default Login;
