import {Container, MenuLateral, MenuFeed, MenuTarefas, MenuReunioes, MenuChats, MenuLogout, ComponetSubMenu, ComponetQuadros, TituloQuadros, Submenu, ContainerQuadros, Quadros, CriarQuadros} from './styles';
import ImageFeed from '../../assets/ImagesIconesMenu/home_feed.png';
import ImageTarefas from '../../assets/ImagesIconesMenu/tarefas.png';
import ImageReunioesDiarias from '../../assets/ImagesIconesMenu/reunioes_diarias.png';
import ImageChats from '../../assets/ImagesIconesMenu/chats.png';
import ImageLogout from '../../assets/ImagesIconesMenu/sair.png';

function Grups() {
    return (
        <Container>
            <MenuLateral>
                <MenuFeed>
                    <img src={ImageFeed} alt="Menu opção feed" title="Menu opção feed" />
                    <p>Feed</p>
                </MenuFeed>
                <MenuTarefas>
                    <img src={ImageTarefas} alt="Menu opção tarefas" title="Menu opção tarefas" />
                    <p>Tarefas</p>
                </MenuTarefas>
                <MenuReunioes>
                    <img src={ImageReunioesDiarias} alt="Menu opção reuniões diárias" title="Menu opção reuniões diárias" />
                    <p>Reuniões diárias</p>
                </MenuReunioes>
                <MenuChats>
                    <img src={ImageChats} alt="Menu opção Chats" title="Menu opção Chats" />
                    <p>Chats</p>
                </MenuChats>
                <MenuLogout>
                    <img src={ImageLogout} alt="Menu opção Sair da aplicação" title="Menu opção Sair da aplicação" />
                    <p>Sair</p>
                </MenuLogout>
            </MenuLateral>
            <Submenu>
                <h3>&larr;  Voltar para o perfil</h3>
                <ComponetSubMenu>
                    Quadros
                </ComponetSubMenu>
                <ComponetSubMenu>
                    Chat
                </ComponetSubMenu>
            </Submenu>
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
        </Container>
    )
}
export default Grups;
