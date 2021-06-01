import { Container, ComponetSubMenu, ComponetQuadros, TituloQuadros, Submenu, ContainerQuadros, Quadros, CriarQuadros, Mensagens, ContatoMensagem, ContainerMensagens } from './styles';
import MenuComponent from '../../components/MenuComponent';
import TemplateChatLeft from '../../components/TemplateChatLeft';
import TemplateChatRight from '../../components/TemplateChatRight';
import { useState } from 'react';
import io from "socket.io-client";
import { useEffect } from 'react';
import { getUser } from '../../service/security';
import { ContainerInputMessage, IconSend, Send } from "../../components/SendMessage/styles";
import { api } from '../../service/api';


function ComponentQuadros() {
    return (
        <ComponetQuadros>
            <TituloQuadros>
                <h1> Quadros </h1>
            </TituloQuadros>
            <ContainerQuadros>
                <Quadros>
                    <h2>Titulo do Quadro</h2>
                </Quadros>
                <CriarQuadros>
                    Criar um novo quadro +
                    </CriarQuadros>
            </ContainerQuadros>
        </ComponetQuadros>
    )
}
const CONNECTION_PORT = 'localhost:3002/';
let socket;
function ChatGrup() {

    const [message, setMessage] = useState("");
    const [messageList, setMessageList] = useState([]);

    const user = getUser();

    useEffect(() => {
        socket = io(CONNECTION_PORT, { transports: ['websocket', 'polling', 'flashsocket'] });
    }, [CONNECTION_PORT]);

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList([...messageList, data]);
        });
    }, []);

    const loadMessages = async () => {
        const response = await api.get("/messages/1");
        setMessageList(response.data)
    }

    const connectToRoom = () => {
        socket.emit("join_room", 1);
    };

    useEffect(() => {
        loadMessages();
        connectToRoom();
    }, [])

    const sendMessage = async () => {
        let messageContent = {
            userId: user.user.userId,
            groupId: 1,
            chatId: 1,
            content: {
                author: user.student.name,
                message: message
            }
        }

        await socket.emit("send_message", messageContent);
        setMessageList([...messageList, messageContent.content])
        setMessage("")
    }

    return (
        <Mensagens>
            <ContatoMensagem>
                <h1> Karina Soares </h1>
            </ContatoMensagem>
            <ContainerMensagens>
                <TemplateChatRight key={message.id} msg={message} />
                {messageList.map((message) => (
                    <>
                        <TemplateChatLeft key={message.id} msg={message} />
                    </>
                ))}
            </ContainerMensagens>
            <ContainerInputMessage>
                <input type="text" placeholder="Digite uma mensagem" onChange={(e) => { setMessage(e.target.value) }} />
                <Send onClick={sendMessage} >
                    <IconSend />
                </Send>
            </ContainerInputMessage>
        </Mensagens>
    )
}
function Grups() {

    const [showChat, setShowChat] = useState(false);
    const [showComponentQuadro, setShowComponentQuadro] = useState(true);


    const handleTradeStade = () => {
        setShowComponentQuadro(true);
        setShowChat(false);
    }
    const handleTradeStadeChat = () => {
        setShowComponentQuadro(false);
        setShowChat(true);
    }

    return (
        <Container>
            <MenuComponent />
            <Submenu>
                <h3>&larr;  Voltar para o perfil</h3>
                <ComponetSubMenu onClick={handleTradeStade}>
                    Grupo
                </ComponetSubMenu>
                <ComponetSubMenu onClick={handleTradeStadeChat}>
                    Chat
                </ComponetSubMenu>
            </Submenu>
            {showChat && <ChatGrup />}
            {showComponentQuadro && <ComponentQuadros />}
        </Container>
    )
}
export default Grups;
