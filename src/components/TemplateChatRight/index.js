import { Container } from './styles';
import { format } from 'date-fns';
function TemplateChatRight({ msg }) {
  return (
    <Container>
      <h3>{msg.author}</h3>
      <p> {msg.message}</p>
      <span>{format(new Date(msg.createdAt), 'dd/MM HH:mm')}</span>
    </Container>
  );
}

export default TemplateChatRight;
