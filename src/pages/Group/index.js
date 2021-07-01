import {
  Container,
  ComponetSubMenu,
  ComponetQuadros,
  TituloQuadros,
  Submenu,
  ContainerQuadros,
  Quadros,
  CriarQuadros,
  Mensagens,
  ContatoMensagem,
  ContainerMensagens,
} from './styles';
import MenuComponent from '../../components/MenuComponent';
import TemplateChatLeft from '../../components/TemplateChatLeft';
import TemplateChatRight from '../../components/TemplateChatRight';
import ChekListProject from '../../components/ChecklistProject';
import { useState } from 'react';
import io from 'socket.io-client';
import { useEffect } from 'react';
import { getUser } from '../../service/security';
import {
  ContainerInputMessage,
  IconSend,
  Send,
} from '../../components/SendMessage/styles';
import { api } from '../../service/api';
import { useParams, useHistory, Link } from 'react-router-dom';

function ComponentQuadros({ workspace }) {
  let { id } = useParams();

  const history = useHistory();

  function goToWorkspace(e) {
    history.push(`/workspace/${e}/${id}`);
  }

  return (
    <ComponetQuadros>
      <TituloQuadros>
        <h1> Quadros </h1>
      </TituloQuadros>
      <ContainerQuadros>
        <Quadros key={workspace.id} onClick={() => goToWorkspace(workspace.id)}>
          <h2></h2>
        </Quadros>
      </ContainerQuadros>
    </ComponetQuadros>
  );
}
const CONNECTION_PORT = 'http://localhost:3002/';
let socket;
function ChatGrup({ chat, groupId }) {
  const [message, setMessage] = useState('');
  const [messageList, setMessageList] = useState([]);
  const [inRoom, setInRoom] = useState(false);

  const user = getUser();

  useEffect(() => {
    socket = io(CONNECTION_PORT, {
      transports: ['websocket', 'polling', 'flashsocket'],
    });
  }, [CONNECTION_PORT]);

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageList([...messageList, data]);
    });
  });
  // useEffect(() => {
  //     socket.on('message_delete', (data) => {
  //       console.log(data)
  //     });
  // })

  const loadMessages = async () => {
    const response = await api.get(`/messages/${chat.id}`);
    setMessageList(response.data);
  };

  const connectToRoom = () => {
    setInRoom(true);
    socket.emit('join_room', chat.id);
  };

  // const deleteMessage = async() => {
   
  //   const messageContent = {
  //     id : "a5ea4040-e6df-44b3-b7fd-5ec1d0529d6d",
  //     userId : 2,
  //   }

  //   await socket.emit('delete_message', messageContent)
  // }

  useEffect(() => {
    loadMessages();
    connectToRoom();
    // deleteMessage();
  }, []);

  const sendMessage = async () => {
    let messageContent = {
      userId: user.user.userId,
      groupId: groupId,
      chatId: chat.id,
      author: user.student.name,
      message: message,
      createdAt: new Date().toISOString(),
    };

    await socket.emit('send_message', messageContent);
    setMessageList([...messageList, messageContent]);
    setMessage('');
  };

  return (
    <Mensagens>
      <ContatoMensagem>
        <h1> {user.student.name} </h1>
      </ContatoMensagem>
      <ContainerMensagens>
        {/* <TemplateChatRight/> */}
        {messageList.map((message) => (
          <>
            {user.user.userId === message.userId ? (
              <TemplateChatLeft key={message.id} msg={message} socket={socket} />
            ) : (
              <TemplateChatRight key={message.id} msg={message} />
            )}
          </>
        ))}
      </ContainerMensagens>
      <ContainerInputMessage>
        <input
          type="text"
          placeholder="Digite uma mensagem"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
        />
        <Send onClick={sendMessage}>
          <IconSend />
        </Send>
      </ContainerInputMessage>
    </Mensagens>
  );
}
function Grups() {
  const [showChat, setShowChat] = useState(false);
  const [showComponentQuadro, setShowComponentQuadro] = useState(true);
  const [showCheckList, setShowChekList] = useState(false);
  const [group, setGroup] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);

  const history = useHistory();

  let { id } = useParams();

  const verifyGroup = async () => {
    const response = await api.get(`/group/${id}`);

    if (!response.data) return history.push('/profile');
    setGroup(response.data);
    setWorkspaces(response.data.Workspace);
  };

  useEffect(() => {
    verifyGroup();
  }, []);

  const handleTradeStade = () => {
    setShowComponentQuadro(true);
    setShowChat(false);
    setShowChekList(false);
  };
  const handleTradeStadeChat = () => {
    setShowComponentQuadro(false);
    setShowChat(true);
    setShowChekList(false);
  };
  const handleTradeStadeCheckList = () => {
    setShowComponentQuadro(false);
    setShowChat(false);
    setShowChekList(true);
  };

  return (
    <Container>
      <MenuComponent />
      <Submenu>
        <h3>
          &larr; <Link to="/profile">Voltar para o perfil</Link>
        </h3>
        <ComponetSubMenu onClick={handleTradeStade}>Grupo</ComponetSubMenu>
        <ComponetSubMenu onClick={handleTradeStadeChat}>Chat</ComponetSubMenu>
        <ComponetSubMenu onClick={handleTradeStadeCheckList}>
          Blabla
        </ComponetSubMenu>
      </Submenu>
      {showChat && <ChatGrup chat={group.Chat} groupId={id} />}
      {showComponentQuadro && <ComponentQuadros workspace={workspaces} />}
      {showCheckList && <ChekListProject />}
    </Container>
  );
}
export default Grups;
