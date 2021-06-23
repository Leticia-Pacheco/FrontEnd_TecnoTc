import { Container } from './styles';
import { format } from 'date-fns';
function TemplateChatLeft({ msg }) {
  console.log(msg);
  return (
    <Container>
      <h3>{msg.author}</h3>
      <p> {msg.message}</p>
      <span>
        {msg.createdAt
          ? format(new Date(msg.createdAt), 'dd/MM HH:mm')
          : 'Data invalida'}
      </span>
    </Container>
  );
}

export default TemplateChatLeft;
