import {Container, Content} from './styles';
import imgHomeFeed from '../../assets/ImagesPerfis/home_feed.png';
import logo from '../../assets/logos/logo_fundo_roxo_png.png';
import perfil from '../../assets/ImagesPerfis/image_perfil_aluno.jpg'
function Workspace() {
  return (
    <Container>
      <header>
        <img src={imgHomeFeed} alt="home" id="home" />
        <img src={logo} alt="logo" id="logo" />
        <img src={perfil} alt="profileUser" className="profileUser" />
      </header>
      <div id="sub-menu">
        <h3>Nome Grupo</h3>
        <article>
          <img src={perfil} alt="profileUser" className="profileUser" />
          <img src={perfil} alt="profileUser" className="profileUser" />
          <button>Convidar</button>
        </article>
      </div>
      <Content></Content>
    </Container>
  );
}

export default Workspace;
