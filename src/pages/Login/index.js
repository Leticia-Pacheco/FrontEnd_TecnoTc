import {
  ApresentacaoEmpresa,
  Overlay,
  Logo,
  LoginEnter,
  ConfirmLogin,
  BoasVindas,
  InputLogar,
  TextCadastro,
  GifColorLogin,
  GifImageLogin,
  InputsLogin,
  IconLock,
  IconEmail,
  RedefinirSenha,
  GifImages,
  Container
} from './styles';
import GifColor from '../../assets/ImagesLogin/GifColor.gif';
import ImageLogin from '../../assets/ImagesLogin/ImageLogin.gif';
import ImageLogo from "../../assets/logos/logo_fundo_branco_png.png";
import { Link, useHistory } from 'react-router-dom';
import Input from '../../components/Input';
import { useState } from 'react';
import { api } from '../../service/api';
import { signIn } from '../../service/security';
import Alert from '../../components/Alert';

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

      <Overlay>
        <Container>
          <LoginEnter>
            <Logo>
              <img src={ImageLogo} alt="Logo" title="Logo"/>
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
                  placeholder="Digite aqui sua senha"
                />
                <IconLock />

                <RedefinirSenha>
                  <Link to="/recoverpassword">
                      <p>Esqueci a senha</p>
                  </Link>
                </RedefinirSenha>

                <Link to="/profileteacher">
                  <InputLogar>
                    <p>Login</p>
                  </InputLogar>
                </Link>
                {/* <Link to="/profileteacher">
                  <InputLogar>
                    <p>Login</p>
                  </InputLogar>
                </Link> */}

                <TextCadastro>
                <p>
                  Não tem uma conta?
                  <Link to="/Register">
                    <span> Cadastre-se!</span>
                  </Link>
                </p>
              </TextCadastro>
              </InputsLogin>
            </ConfirmLogin>
          </LoginEnter>

          <GifImages>
            <GifImageLogin>
              <img src={ImageLogin} alt="Imagem animada" title="Imagem animada" />
            </GifImageLogin>
            <GifColorLogin>
              <img src={GifColor} alt="Imagem animada" title="Imagem animada" />
            </GifColorLogin>
          </GifImages>
        </Container>
      </Overlay>
    </>
  );
}

export default Login;