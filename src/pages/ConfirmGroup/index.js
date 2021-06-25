import {
  ButtonConfirm,
  Container,
  Header,
  ImageConfirmEmail,
  Mensagem,
} from './styles';
// import Logo from '../../components/Logo';
import GifConfirmEmail from '../../assets/ImagesConfirmEmail/ImageconfirmEmail.png';
import { Link, useHistory, useParams } from 'react-router-dom';
import { useState } from 'react';
import { api } from '../../service/api';
import { useEffect } from 'react';

function PedidoConfirmEmail() {
  const history = useHistory();


  const { inviteToken } = useParams();

  const saveStudentInGroup = async () => {
    try {
      await api.patch(`group/${inviteToken}/add`);
    } catch (error) {
      console.log(error)
    }
  }

  const goToProfile = async (e) => {
    history.push('/profile')
  }

  useEffect(() => {
    saveStudentInGroup();
  }, [])

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
            <ButtonConfirm onClick={goToProfile}>
              <p>Ir para a página principal!</p>
            </ButtonConfirm>
          </Link>
        </Mensagem>
      </Container>
    </>
  );
}

export default PedidoConfirmEmail;
