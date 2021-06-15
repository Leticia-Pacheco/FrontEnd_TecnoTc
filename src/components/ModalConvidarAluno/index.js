import Input from '../Input';
import {Container, Overlay} from './styles';

function InviteStudent({handleClose}) {

  return (
    <>
      <Overlay>
        <Container>
          <span onClick={handleClose}>X</span>
          <h2>Convidar um Aluno</h2>
          <h3>E-mail do aluno</h3>
          <Input
            id="title"
            placeholder="Digite o e-mail do aluno"
            required
          />
          <button>Convidar</button>
        </Container>
      </Overlay>
    </>
  );
}

export default InviteStudent;
