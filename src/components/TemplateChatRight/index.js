import { Container } from './styles';
function TemplateChatRight({ msg }) {
  return (
    <Container>
      <h3>{msg.author}</h3>
      <p> {msg.message}</p>
    </Container>
  );
}

export default TemplateChatRight;
