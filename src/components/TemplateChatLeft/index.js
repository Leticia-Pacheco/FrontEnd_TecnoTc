import {Container} from './styles';
import {format} from 'date-fns';
function TemplateChatLeft({msg, socket}) {
  const deleteMessage = async (del) => {
    const deleteMessageUser = {
      id: del.id,
      userId: del.userId,
      chatId: del.chatId
    };

    await socket.emit('delete_message', deleteMessageUser);
  };

  return (
    <Container>
      <h3 onClick={() => deleteMessage(msg)}>
        {msg.author
          ? msg.author
          : msg.User?.Student.name || msg.User?.Teacher.name}
      </h3>
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
