import { Container } from './styles';
import { format } from 'date-fns';
function TemplateChatLeft({ msg }) {
  console.log(msg);
  return (
    <Container>
      <h3>{msg.author}</h3>
      <p> {msg.message}</p>
      <span>{format(new Date(msg.createdAt), 'dd/MM/yyyy HH:mm')}</span>
    </Container>
  );
}

export default TemplateChatLeft;
