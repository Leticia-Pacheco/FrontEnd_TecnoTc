<<<<<<< HEAD
import { InputsLogin, IconLock, IconEmail, RedefinirSenha, } from "./styles";

function UsuaryLogin() {
    return(
        <>
            <InputsLogin>
                <p>Email</p>
                <input type="text" placeholder="Digite aqui seu email"/>
                <IconEmail/>

                <p>Senha</p>
                <input type="password" placeholder="Digite aqui seu email"/>
                <IconLock/>

                <RedefinirSenha>
                    <p>Esqueci a senha</p>
                </RedefinirSenha>
            </InputsLogin>
        </>
    );
=======
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
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
}

export default UsuaryLogin;