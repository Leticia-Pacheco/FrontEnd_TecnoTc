import {Overlay, ModalRecuperarSenha, Header, ImageSenha, MensagemRecuperacaoSenha, InserirEmail, ButtonEnviarLink} from "./styles";
import Logo from "../../assets/logos/logo_fundo_roxo_png.png";
import CadeadoRecSenha from "../../assets/ImagesRecuperarSenha/cadeadoSenha.jpg";
import { Link } from "react-router-dom";

function RecuperarSenha() {
    return(
        <>
            <Overlay>
                <ModalRecuperarSenha>
                    <Header>
                        <img src={Logo} alt="Logo" title="Logo"/>
                        <h1>Esqueceu sua senha?</h1>
                    </Header>

                    <ImageSenha>
                        <img src={CadeadoRecSenha} alt="Cadeado senha" title="Cadeado senha"/>
                    </ImageSenha>

                    <MensagemRecuperacaoSenha>
                        <p>
                        Está tudo bem! Será enviado um link para o seu e-mail assim que digitá-lo para que possa redefinir sua senha!
                        </p>
                    </MensagemRecuperacaoSenha>

                    <InserirEmail>
                        <p>Digite seu email: </p>
                        <input type="text" placeholder="Insira seu email aqui"></input>
                    </InserirEmail>
                    
                    <Link to="/redefinirsenha">
                        <ButtonEnviarLink>
                            <button>Enviar link de recuperação</button>
                        </ButtonEnviarLink>
                    </Link>
                </ModalRecuperarSenha>
            </Overlay>
        </>
    );
}

export default RecuperarSenha;