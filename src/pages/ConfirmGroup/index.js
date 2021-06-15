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
            <p>Você entrou nesse Grupo. Bom trabalho</p>
            <p>Aproveite as ferramentas feitas especialmente para você!</p>
            <Link to="/profile">
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