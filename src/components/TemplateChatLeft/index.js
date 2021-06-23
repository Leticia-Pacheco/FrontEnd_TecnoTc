import { Container } from './styles';

function TemplateChatLeft({ msg }) {
  console.log(msg);
  return (
    <Container>
      <h3>{msg.author}</h3>
      <p> {msg.message}</p>
      <span>{msg.createdAt}</span>
    </Container>
  );
}

export default TemplateChatLeft;
