import {
  ButtonConfirm,
  Container,
  Header,
  ImageConfirmEmail,
  Mensagem,
} from './styles';
import Logo from '../../components/Logo';
import GifConfirmEmail from '../../assets/ImagesConfirmEmail/ImageconfirmEmail.png';

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

          <ButtonConfirm>
            <p>Ir para a página principal!</p>
          </ButtonConfirm>
        </Mensagem>
      </Container>
    </>
  );
}

export default PedidoConfirmEmail;
