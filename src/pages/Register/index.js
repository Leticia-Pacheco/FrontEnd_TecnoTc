import {
  Container,
  RegisterUsuary,
  Logo,
  ApresentacaoEmpresa,
  NivelUsuario,
  OpcaoNivelUsuario,
  InputCadastrar,
  TextLogin,
} from './styles';
import GifProfessores from '../../assets/ImagesRegister/GifProfessores.gif';
import GifAlunos from '../../assets/ImagesRegister/GifAlunos.gif';
import GifOutros from '../../assets/ImagesRegister/GifOutros.gif';
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
import {
  FormRegister,
  IconEmail,
  IconLock,
  IconUsuary,
} from '../../components/InputsRegister/styles';
import Input from '../../components/Input';
import { api } from './../../service/api';
import { signIn } from '../../service/security';
import ImageLogo from "../../assets/logos/logo_fundo_branco_png.png";

function Register() {
  const history = useHistory();
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: '',
    validPassword: '',
  });
  const handleInput = (e) => {
    setUserRegister({ ...userRegister, [e.target.id]: e.target.value });
  };

  const validPassword = () =>
    userRegister.password === userRegister.validPassword;

  const buttonDisabled = () => {
    const { name, email, password } = userRegister;

    if (!name || !email || !password || !validPassword()) return true;

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validPassword()) return alert('As senhas precisam ser iguais!');

    try {
      const { name, email, password } = userRegister;

      const response = await api.post('/students', {
        name,
        email,
        password,
      });

      signIn(response.data);

      history.push('/orderconfirmemail');
    } catch (error) {
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <Container>
      <RegisterUsuary>
        <Logo>
          <img src={ImageLogo} alt="Logo" title="Logo"/>
        </Logo>

        <ApresentacaoEmpresa>
          <span>TecnoTc</span>
          <p>Junte-se à nossa comunidade!</p>
        </ApresentacaoEmpresa>

        <p>Você é:</p>
        <NivelUsuario>
          <OpcaoNivelUsuario>
            <img
              src={GifProfessores}
              alt="Identificação"
              title="Identificação"
            />
            <p>Professor</p>
          </OpcaoNivelUsuario>
          <OpcaoNivelUsuario>
            <img src={GifAlunos} alt="Identificação" title="Identificação" />
            <p>Aluno</p>
          </OpcaoNivelUsuario>
          <OpcaoNivelUsuario>
            <img src={GifOutros} alt="Identificação" title="Identificação" />
            <p>Outro</p>
          </OpcaoNivelUsuario>
        </NivelUsuario>

        <FormRegister onSubmit={handleSubmit}>
          <p>Nome Completo</p>
          <Input
            id="name"
            value={userRegister.name}
            handler={handleInput}
            type="text"
            placeholder="Digite aqui seu nome completo"
            required
          />
          <IconUsuary />

          <p>Email</p>
          <Input
            id="email"
            value={userRegister.email}
            handler={handleInput}
            type="text"
            placeholder="Digite aqui seu email"
            required
          />
          <IconEmail />

          <p>Senha</p>
          <Input
            id="password"
            value={userRegister.password}
            handler={handleInput}
            type="password"
            placeholder="Digite aqui sua senha"
            required
          />
          <IconLock />

          <Input
            id="validPassword"
            placeholder="Confirmar Senha"
            type="password"
            onBlur={(e) => {
              if (!validPassword()) alert('As senhas precisam ser iguais');
            }}
            value={userRegister.validPassword}
            handler={handleInput}
            required
          />
          <IconLock />
          
          <Link to="orderconfirmemail">
            <InputCadastrar disabled={buttonDisabled()}>
              <p>Cadastrar</p>
            </InputCadastrar>
          </Link>
        </FormRegister>

        <TextLogin>
          <p>
            Já possui uma conta?
            <Link to="/">
              <span> Entre agora!</span>
            </Link>
          </p>
        </TextLogin>
      </RegisterUsuary>
    </Container>
  );
}

export default Register;
