import {
  MenuLateral,
  MenuPerfil,
  MenuFeed,
  MenuTarefas,
  MenuReunioes,
  MenuChats,
  MenuLogout,
} from './styles';
import ImagePerfil from '../../assets/ImagesFeed/foto_perfil.png';
import ImageFeed from '../../assets/ImagesIconesMenu/home_feed.png';
import ImageTarefas from '../../assets/ImagesIconesMenu/tarefas.png';
import ImageReunioesDiarias from '../../assets/ImagesIconesMenu/reunioes_diarias.png';
import ImageChats from '../../assets/ImagesIconesMenu/chats.png';
import ImageLogout from '../../assets/ImagesIconesMenu/sair.png';
import { useHistory } from 'react-router-dom';
import { getUser, signOut } from '../../service/security';

function MenuComponent() {
  const history = useHistory();

  const goToFeed = () => {
    history.push('/feed');
  };

  const handleSignOut = () => {
    signOut();

    history.replace('/');
  };


  const goToProfile = () => {
    history.push('/profile')
  }

  const user = getUser();

  return (
    <MenuLateral>
      <MenuPerfil>
        <img
          src={user.student.profileImage || ImagePerfil}
          alt="Menu opção perfil"
          title="Menu opção perfil"
        />
        <p>{user.student.name}</p>
      </MenuPerfil>
      <MenuFeed onClick={goToFeed}>
        <img src={ImageFeed} alt="Menu opção feed" title="Menu opção feed" />
        <p>Feed</p>
      </MenuFeed>
      <MenuTarefas onClick={goToProfile}>
        <img
          src={ImageTarefas}
          alt="Menu opção tarefas"
          title="Menu opção tarefas"
        />
        <p>Perfil</p>
      </MenuTarefas>
      <MenuReunioes>
        <img
          src={ImageReunioesDiarias}
          alt="Menu opção reuniões diárias"
          title="Menu opção reuniões diárias"
        />
        <p>Sprints</p>
      </MenuReunioes>
      <MenuLogout onClick={handleSignOut}>
        <img
          src={ImageLogout}
          alt="Menu opção Sair da aplicação"
          title="Menu opção Sair da aplicação"
        />
        <p>Sair</p>
      </MenuLogout>
    </MenuLateral>
  );
}

export default MenuComponent;
