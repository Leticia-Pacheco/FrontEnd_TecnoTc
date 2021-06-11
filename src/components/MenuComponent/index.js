import {MenuLateral, MenuPerfil,  MenuFeed, MenuTarefas, MenuReunioes, MenuChats, MenuLogout} from './styles';
import ImagePerfil from '../../assets/ImagesFeed/foto_perfil.png'
import ImageFeed from '../../assets/ImagesIconesMenu/home_feed.png';
import ImageTarefas from '../../assets/ImagesIconesMenu/tarefas.png';
import ImageReunioesDiarias from '../../assets/ImagesIconesMenu/reunioes_diarias.png';
import ImageChats from '../../assets/ImagesIconesMenu/chats.png';
import ImageLogout from '../../assets/ImagesIconesMenu/sair.png';


function MenuComponent() {
  return (
    <MenuLateral>
      <MenuPerfil>
        <img src={ImagePerfil} alt="Menu opção perfil" title="Menu opção perfil" />
        <p>Perfil</p>
      </MenuPerfil>
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
  )
}

export default MenuComponent;