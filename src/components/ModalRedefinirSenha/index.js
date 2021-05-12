import { ContainerModal, Overlay, Header, MensagemUsuario, InserirNovaSenha, ButtonRedefinirSenha } from "./styles";
import Logo from "../../assets/logos/logo_fundo_roxo_png.png";
import { Link } from "react-router-dom";

function RedefinePassword () {
    return(
        <>
            <Overlay>
                <ContainerModal>
                    <Header>
                        <img src={Logo} alt="Logo" title="Logo"/>
                    </Header>

                    <h1>Recuperação de senha</h1>
                    <MensagemUsuario>
                        <p>Ah! Defina uma senha fácil de lembrar e de alta segurança para evitar esse processo de recuperação!</p>
                    </MensagemUsuario>

                    <InserirNovaSenha>
                        <p>Nova senha:</p>
                        <input type="text" placeholder="Insira a nova senha"/>
                    </InserirNovaSenha>
                    <InserirNovaSenha>
                        <p>Repita a senha:</p>
                        <input type="text" placeholder="Insira novamente sua senha"/>
                    </InserirNovaSenha>

                    <Link to="/">
                        <ButtonRedefinirSenha>
                            <button>Redefinir senha</button>
                        </ButtonRedefinirSenha>
                    </Link>
                </ContainerModal>
            </Overlay>
        </>
    );
}

export default RedefinePassword;