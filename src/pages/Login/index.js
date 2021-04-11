import { ApresentacaoEmpresa, Container, LoginEnter, ConfirmLogin, BoasVindas, InputLogar, TextCadastro, GifColorLogin, GifImageLogin } from "./styles";
import GifColor from "../../assets/ImagesLogin/GifColor.gif";
import ImageLogin from "../../assets/ImagesLogin/ImageLogin.gif";
import UsuaryLogin from "../../components/InputsLogin";
import Logo from "../../components/Logo";


function Login() {
    return(
        <Container>
            <LoginEnter>
                <Logo/>
                <ConfirmLogin>
                    <ApresentacaoEmpresa>
                        <p>Nós somos <span>TecnoTc!</span></p>
                    </ApresentacaoEmpresa>
                    <BoasVindas>
                        <p>Seja bem vinda(o) de volta</p>
                    </BoasVindas>

                    <UsuaryLogin/>

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