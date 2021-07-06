import {
  Container,
  ComponetSubMenu,
  ComponetQuadros,
  TituloQuadros,
  Submenu,
  ContainerQuadros,
  Quadros,
  Mensagens,
  ContatoMensagem,
  ContainerMensagens,
} from './styles';
import {
  ContainerInputMessage,
  IconSend,
  Send,
} from '../../components/SendMessage/styles';
import MenuComponent from '../../components/MenuComponent';
import TemplateChatLeft from '../../components/TemplateChatLeft';
import TemplateChatRight from '../../components/TemplateChatRight';
import ChekListProject from '../../components/ChecklistProject';
import {useState} from 'react';
import io from 'socket.io-client';
import {useEffect} from 'react';
import {getUser} from '../../service/security';
import {api} from '../../service/api';
import {useParams, useHistory, Link} from 'react-router-dom';
import CreateSprint from '../../components/ModalCriarSprint';
import Loading from '../../components/Loading';

function ComponentQuadros({workspace}) {
  let {id} = useParams();

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
          <h2>{workspace.name}</h2>
        </Quadros>
      </ContainerQuadros>
    </ComponetQuadros>
  );
}
const CONNECTION_PORT = 'https://tecno-tcc-chat.herokuapp.com/';
let socket;
function ChatGrup({chat, groupId}) {
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

  const loadMessages = async () => {
    const response = await api.get(`/messages/${chat.id}`);
    setMessageList(response.data);
  };

  const connectToRoom = () => {
    setInRoom(true);
    socket.emit('join_room', chat.id);
  };

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
  const [showCreateSprint, setShowCreateSprint] = useState(false);
  const [group, setGroup] = useState([]);
  const [workspaces, setWorkspaces] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  let {id} = useParams();

  const verifyGroup = async () => {
    const response = await api.get(`/group/${id}`);

    if(!response.data) return history.push('/profile');
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
    setShowCreateSprint(false)
  };
  const handleTradeStadeChat = () => {
    setShowComponentQuadro(false);
    setShowChat(true);
    setShowChekList(false);
    setShowCreateSprint(false)
  };
  const handleTradeStadeCheckList = () => {
    setShowComponentQuadro(false);
    setShowChat(false);
    setShowChekList(true);
    setShowCreateSprint(false)
  };
  const handleTradeSprint = () => {
    setShowComponentQuadro(false);
    setShowChat(false);
    setShowChekList(false);
    setShowCreateSprint(true)
  };

  return (
    <Container>
      {isLoading && <Loading />}
      <MenuComponent />
      <Submenu>
        <h3>
          &larr; <Link to="/profile">Voltar para o perfil</Link>
        </h3>
        <ComponetSubMenu onClick={handleTradeStade}>Grupo</ComponetSubMenu>
        <ComponetSubMenu onClick={handleTradeStadeChat}>Chat</ComponetSubMenu>
        <ComponetSubMenu onClick={handleTradeStadeCheckList}>
          Histórias do projeto
        </ComponetSubMenu>
        <ComponetSubMenu onClick={handleTradeSprint}>Criar Sprint</ComponetSubMenu>
      </Submenu>
      {showChat && <ChatGrup chat={group.Chat} groupId={id} />}
      {showComponentQuadro && <ComponentQuadros workspace={workspaces} />}
      {showCheckList && <ChekListProject groupId={id} />}
      {showCreateSprint && <CreateSprint handleClose={() => {
        setShowCreateSprint(false);
        setIsLoading(false);
      }}
        setIsLoading={setIsLoading}
        groupId={id} />}
    </Container>
  );
}
export default Grups;
