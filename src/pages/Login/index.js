import { ApresentacaoEmpresa, Container, LoginEnter, Logo, ConfirmLogin, BoasVindas, InputsLogin, IconLock, IconEmail, RedefinirSenha, InputLogar, TextCadastro, GifColorLogin, GifImageLogin } from "./styles";
import GifColor from "../../assets/ImagesLogin/GifColor.gif";
import ImageLogin from "../../assets/ImagesLogin/ImageLogin.gif";


function Login() {
    return(
        <Container>
            <LoginEnter>
                <Logo> <p>Logo da empresa</p> </Logo>
                <ConfirmLogin>
                    <ApresentacaoEmpresa>
                        <p>Nós somos <span>TecnoTc!</span></p>
                    </ApresentacaoEmpresa>
                    <BoasVindas>
                        <p>Seja bem vinda(o) de volta</p>
                    </BoasVindas>

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

                    <InputLogar>
                        <p>Login</p>
                    </InputLogar>
                    <TextCadastro>
                        <p>Não tem uma conta? <span>Cadastre-se!</span></p>
                    </TextCadastro>
                </ConfirmLogin>
            </LoginEnter>

            <GifImageLogin>
                <img src={ImageLogin} alt="Imagem animada" title="Imagem animada"/>
            </GifImageLogin>
            <GifColorLogin>
                <img src={GifColor} alt="Imagem animada" title="Imagem animada"/>
            </GifColorLogin>
        </Container>
    );
}

export default Login;