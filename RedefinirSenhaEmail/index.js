import { Container, ContainerRecepcao, Header, ContHeader, Logo, ImageRecSenha, Mensagem } from "./styles";
import ImageLogo from "../../assets/logos/logo_fundo_roxo_png.png";
import ImageSenha from "../../assets/ImagesRecuperarSenha/GifRecSenha.gif";

function ResetEmailPassword() {
    return(
        <>
            <Container>
                <Header>
                    <ContHeader>
                        <Logo>
                            <img src={ImageLogo} alt="Logo" title="Logo"/>
                        </Logo>
                        <p>TecnoTc</p>
                        <span>TecnoTc Tecnologias Ltda.</span>
                        <span>Avenida Paulista, 1000, Bela Vista, São Paulo</span>

                        <ContainerRecepcao>
                            <ImageRecSenha>
                                <img src={ImageSenha} alt="Gif recuperar senha" title="Gif recuperar senha"/>
                            </ImageRecSenha>
                            <p>Suporte para recuperação de senha</p>
                            <span>De Luana Almeida</span>
                        </ContainerRecepcao>
                        <Mensagem>
                            <h3>Está tentando recuperar sua senha?</h3>
                            <p>Olá, Luana! Vimos que está tentando recuperar sua senha. Se realmente foi você quem solicitou, 
                               clique no botão abaixo para continuar o processo. Caso não tenha sido, desconsidere essa mensagem.</p>
                            
                            <p>Ah! E não se esqueça de definir uma senha fácil para se lembrar e de alta segurança para evitar 
                               que esquecimentos futuros ocorram.</p>

                            <button>Recuperar senha</button>
                        </Mensagem>
                    </ContHeader>
                </Header>
            </Container>
        </>
    );
}

export default ResetEmailPassword;