import { ButtonConfirm, Container, Header, ImageConfirmEmail, Mensagem } from "./styles";
import Logo from "../../components/Logo";
import GifConfirmEmail from "../../assets/ImagesConfirmEmail/GifConfirmEmail.gif";

function PedidoConfirmEmail () {
    return(
        <>
            <Container>
                <Header>
                    <Logo/>

                    <p>Bem vinda(o) ao TecnoTc!</p>
                </Header>

                <Mensagem>
                    <p>A equipe agradece o seu cadastro!</p>
                    <p>Enviaremos uma confirmação ao email cliente.exemplo@hotmail.com, ok?</p>

                    <ImageConfirmEmail>
                        <img src={GifConfirmEmail} alt="Confirmação de email" title="Confirmação de email"/>
                    </ImageConfirmEmail>

                    <ButtonConfirm>
                        <p>OK!</p>
                    </ButtonConfirm>
                </Mensagem>
            </Container>
        </>
    );
}

export default PedidoConfirmEmail;