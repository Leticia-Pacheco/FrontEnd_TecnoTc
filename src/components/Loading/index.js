import {Container} from './styles';
import imgLogo from '../../assets/reload.png';

function Loading() {
  return (
    <Container>
      <img src={imgLogo} alt='loading' />
      Carregando...
    </Container>
  );
}

export default Loading;
