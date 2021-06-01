import {Container, MenuLateral, MenuFeed, MenuTarefas, MenuReunioes, MenuChats, MenuLogout, ListContatos, Contato, InfoContato, FotoContato, NomeContato, UltimaMensagem, Mensagens, ContatoMensagem, ContainerMensagens} from './styles';
import ImageFeed from '../../assets/ImagesIconesMenu/home_feed.png';
import ImageTarefas from '../../assets/ImagesIconesMenu/tarefas.png';
import ImageReunioesDiarias from '../../assets/ImagesIconesMenu/reunioes_diarias.png';
import ImageChats from '../../assets/ImagesIconesMenu/chats.png';
import ImageLogout from '../../assets/ImagesIconesMenu/sair.png';
import ImageContato from '../../assets/ImagesChat/perfil.jpg';
import InputSearch from '../../components/InputSearch';
import SendMessage from '../../components/SendMessage';
import TemplateChatLeft from '../../components/TemplateChatLeft';
import TemplateChatRight from '../../components/TemplateChatRight';

function Chat() {
    return (
        <Container>
            <MenuLateral>
                <MenuFeed>
                    <img src={ImageFeed} alt="Menu opção feed" title="Menu opção feed"/>
                    <p>Feed</p>
                </MenuFeed>
                <MenuTarefas>
                    <img src={ImageTarefas} alt="Menu opção tarefas" title="Menu opção tarefas"/>
                    <p>Tarefas</p>
                </MenuTarefas>
                <MenuReunioes>
                    <img src={ImageReunioesDiarias} alt="Menu opção reuniões diárias" title="Menu opção reuniões diárias"/>
                    <p>Reuniões diárias</p>
                </MenuReunioes>
                <MenuChats>
                    <img src={ImageChats} alt="Menu opção Chats" title="Menu opção Chats"/>
                    <p>Chats</p>
                </MenuChats>
                <MenuLogout>
                    <img src={ImageLogout} alt="Menu opção Sair da aplicação" title="Menu opção Sair da aplicação"/>
                    <p>Sair</p>
                </MenuLogout>
              </MenuLateral>
              <ListContatos>
                <InputSearch/>
                <Contato>
                    <FotoContato>
                        <img src={ImageContato} alt="Contato" title="Contato"/>
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
                        <img src={ImageContato} alt="Contato" title="Contato"/>
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
                    <TemplateChatRight/>
                    <TemplateChatLeft/>
                </ContainerMensagens>
                <SendMessage/>
              </Mensagens>
        </Container>
    )
  }
  export default Chat;
  