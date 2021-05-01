import { InputsLogin, IconLock, IconEmail, RedefinirSenha } from './styles';

function UsuaryLogin() {
  return (
    <>
      <InputsLogin>
        <p>Email</p>
        <input type="text" placeholder="Digite aqui seu email" />
        <IconEmail />

        <p>Senha</p>
        <input type="password" placeholder="Digite aqui seu email" />
        <IconLock />

        <RedefinirSenha>
          <p>Esqueci a senha</p>
        </RedefinirSenha>
      </InputsLogin>
    </>
  );
}

export default UsuaryLogin;