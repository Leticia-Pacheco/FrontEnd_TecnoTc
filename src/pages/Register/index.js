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
<<<<<<< HEAD
import { Link, useHistory } from 'react-router-dom';
import { useState } from 'react';
=======
import {Link, useHistory} from 'react-router-dom';
import {useState} from 'react';
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
import {
  FormRegister,
  IconEmail,
  IconLock,
  IconUsuary,
} from '../../components/InputsRegister/styles';
import Input from '../../components/Input';
<<<<<<< HEAD
import { api } from './../../service/api';
import { signIn } from '../../service/security';
=======
import {api} from './../../service/api';
import {signIn} from '../../service/security';
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb

function Register() {
  const history = useHistory();
  const [userRegister, setUserRegister] = useState({
    name: '',
    email: '',
    password: '',
    validPassword: '',
  });
  const handleInput = (e) => {
<<<<<<< HEAD
    setUserRegister({ ...userRegister, [e.target.id]: e.target.value });
=======
    setUserRegister({...userRegister, [e.target.id]: e.target.value});
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
  };

  const validPassword = () =>
    userRegister.password === userRegister.validPassword;

  const buttonDisabled = () => {
<<<<<<< HEAD
    const { name, email, password } = userRegister;

    if (!name || !email || !password || !validPassword()) return true;
=======
    const {name, email, password} = userRegister;

    if(!name || !email || !password || !validPassword()) return true;
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb

    return false;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

<<<<<<< HEAD
    if (!validPassword()) return alert('As senhas precisam ser iguais!');

    try {
      const { name, email, password } = userRegister;
=======
    if(!validPassword()) return alert('As senhas precisam ser iguais!');

    try {
      const {name, email, password} = userRegister;
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb

      const response = await api.post('/students', {
        name,
        email,
        password,
      });

      signIn(response.data);

<<<<<<< HEAD
      history.push('/orderconfirmemail');
    } catch (error) {
=======
      history.push('/confirmemail');
    } catch(error) {
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
      console.error(error);
      alert(error.response.data.error);
    }
  };

  return (
    <Container>
      <RegisterUsuary>
        <Logo>
          <p>Logo da empresa</p>
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
          <Input
            id="validPassword"
            placeholder="Confirmar Senha"
            type="password"
            onBlur={(e) => {
<<<<<<< HEAD
              if (!validPassword()) alert('As senhas precisam ser iguais');
=======
              if(!validPassword()) alert('As senhas precisam ser iguais');
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
            }}
            value={userRegister.validPassword}
            handler={handleInput}
            required
          />
          <InputCadastrar disabled={buttonDisabled()}>
            <p>Cadastrar</p>
          </InputCadastrar>
          <IconLock />
        </FormRegister>

        <TextLogin>
          <p>
            Já possui uma conta?{' '}
            <Link to="/">
              <span>Entre agora!</span>
            </Link>
          </p>
        </TextLogin>
      </RegisterUsuary>
    </Container>
  );
}

export default Register;
