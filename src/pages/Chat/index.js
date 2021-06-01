import {Container, ListContatos, Contato, InfoContato, FotoContato, NomeContato, UltimaMensagem, Mensagens, ContatoMensagem, ContainerMensagens} from './styles';
import ImageContato from '../../assets/ImagesChat/perfil.jpg';
import InputSearch from '../../components/InputSearch';
import SendMessage from '../../components/SendMessage';
import TemplateChatLeft from '../../components/TemplateChatLeft';
import TemplateChatRight from '../../components/TemplateChatRight';
import MenuComponent from '../../components/MenuComponent';

function Chat() {
    return (
        <Container>
            <MenuComponent />
            <ListContatos>
                <InputSearch />
                <Contato>
                    <FotoContato>
                        <img src={ImageContato} alt="Contato" title="Contato" />
                    </FotoContato>
                    <InfoContato>
                        <NomeContato>
                            <h2> Karina Soares </h2>
                        </NomeContato>
                        <UltimaMensagem>
                            <p> Nunc viverra imperdiet enim. Fusce e... </p>
                        </UltimaMensagem>
                    </InfoContato>
                </Contato>
                <Contato>
                    <FotoContato>
                        <img src={ImageContato} alt="Contato" title="Contato" />
                    </FotoContato>
                    <InfoContato>
                        <NomeContato>
                            <h2> Karina Soares </h2>
                        </NomeContato>
                        <UltimaMensagem>
                            <p> Nunc viverra imperdiet enim. Fusce e... </p>
                        </UltimaMensagem>
                    </InfoContato>
                </Contato>
            </ListContatos>
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
        </Container>
    )
}
export default Chat;
