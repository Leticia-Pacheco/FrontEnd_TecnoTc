import { Container, IconSend, Send } from "./styles";

function SendMessage() {

  return(
    <Container>
      <input placeholder="Digite uma mensagem" />
      <Send>
       <IconSend/>
      </Send>
    </Container>
  );
}

export default SendMessage;