import { RegisterEnter, IconEmail, IconLock, IconUsuary } from './styles';

function UsuaryRegister() {
  return (
    <>
      <RegisterEnter>
        <p>Nome Completo</p>
        <input type="text" placeholder="Digite aqui seu nome completo" />
        <IconUsuary />

        <p>Email</p>
        <input type="text" placeholder="Digite aqui seu email" />
        <IconEmail />

        <p>Senha</p>
        <input type="text" placeholder="Digite aqui sua senha" />
        <IconLock />
      </RegisterEnter>
    </>
  );
}

export default UsuaryRegister;
