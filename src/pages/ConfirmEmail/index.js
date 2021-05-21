import {
  ButtonConfirm,
  Container,
  Header,
  ImageConfirmEmail,
  Mensagem,
} from './styles';
// import Logo from '../../components/Logo';
import GifConfirmEmail from '../../assets/ImagesConfirmEmail/ImageconfirmEmail.png';
import { Link } from 'react-router-dom';

function PedidoConfirmEmail() {

  return (
    <>
      <Container>
        <Header>
          <ImageConfirmEmail>
            <img
              src={GifConfirmEmail}
              alt="Confirmação de email"
              title="Confirmação de email"
            />
          </ImageConfirmEmail>
          <p>Prontinho!</p>
        </Header>

        <Mensagem>
          <p>O seu email foi confirmado!</p>
          <p>Aproveite as ferramentas feitas especialmente para você!</p>
          <Link to="/">
            <ButtonConfirm>
              <p>Ir para a página principal!</p>
            </ButtonConfirm>
          </Link>
        </Mensagem>
      </Container>
    </>
  );
}

export default PedidoConfirmEmail;