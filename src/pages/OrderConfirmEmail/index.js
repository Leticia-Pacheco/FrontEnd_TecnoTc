import {
  Overlay,
  ButtonConfirm,
  Container,
  Header,
  ImageConfirmEmail,
  Mensagem,
  Logo,
} from './styles';
import GifConfirmEmail from '../../assets/ImagesConfirmEmail/GifConfirmEmail.gif';
import { Link, useLocation } from 'react-router-dom';
import LogoImage from "../../assets/logos/logo_fundo_roxo_png.png";

function PedidoConfirmEmail() {

  const location = useLocation()

  return (
    <>
      <Overlay>
        <Container>
          <Header>
            <Logo>
              <img src={LogoImage} alt="Logo da empresa" title="Logo da empresa"/>
            </Logo>
            <p>Bem vinda(o) ao TecnoTc!</p>
          </Header>

          <Mensagem>
            <p>A equipe agradece o seu cadastro!</p>
            <p>
              Enviaremos uma confirmação ao email {location.email}, ok?
            </p>

            <ImageConfirmEmail>
              <img
                src={GifConfirmEmail}
                alt="Confirmação de email"
                title="Confirmação de email"
              />
            </ImageConfirmEmail>

            <Link to="/">
              <ButtonConfirm>
                <p>OK!</p>
              </ButtonConfirm>
            </Link>
          </Mensagem>
        </Container>
      </Overlay>
    </>
  );
}

export default PedidoConfirmEmail;
