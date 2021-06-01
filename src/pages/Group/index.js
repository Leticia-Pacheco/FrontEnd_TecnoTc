import {Container, ComponetSubMenu, ComponetQuadros, TituloQuadros, Submenu, ContainerQuadros, Quadros, CriarQuadros, Mensagens, ContatoMensagem, ContainerMensagens} from './styles';
import MenuComponent from '../../components/MenuComponent';
import TemplateChatLeft from '../../components/TemplateChatLeft';
import TemplateChatRight from '../../components/TemplateChatRight';
import SendMessage from '../../components/SendMessage';
import {useState} from 'react';
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

function ChatGrup() {
    return (
        <Mensagens>
            <ContatoMensagem>
                <h1> Karina Soares </h1>
            </ContatoMensagem>
            <ContainerMensagens>
                <TemplateChatRight />
                <TemplateChatLeft />
            </ContainerMensagens>
            <SendMessage />
        </Mensagens>
    )
}
function Grups() {

    const [showChat, setShowChat] = useState(false);
    const [showComponentQuadro, setShowComponentQuadro] = useState(true);


    const handleTradeStade = () => {
        setShowComponentQuadro(!showComponentQuadro);
        setShowChat(!showChat);
    }

    return (
        <Container>
            <MenuComponent />
            <Submenu>
                <h3>&larr;  Voltar para o perfil</h3>
                <ComponetSubMenu onClick={handleTradeStade}>
                    Grupo
                </ComponetSubMenu>
                <ComponetSubMenu onClick={handleTradeStade}>
                    Chat
                </ComponetSubMenu>
            </Submenu>
            {showChat && <ChatGrup />}
            {showComponentQuadro && <ComponentQuadros />}
        </Container>
    )
}
export default Grups;
