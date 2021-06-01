import { ContainerInputMessage, IconSend, Send } from "./styles";

function SendMessage({message}) {
  console.log(message)

  return(
    <ContainerInputMessage>
      <input placeholder="Digite uma mensagem" />
      <Send>
       <IconSend/>
      </Send>
    </ContainerInputMessage>
  );
}

export default SendMessage;