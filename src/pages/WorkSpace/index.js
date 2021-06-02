import { Container, Content } from './styles';
import imgHomeFeed from '../../assets/ImagesPerfis/home_feed.png';
import logo from '../../assets/ImagesPerfis/logo_fundo_roxo_png.png';
function Workspace() {
  return (
    <Container>
      <header>
        <img src={imgHomeFeed} alt="icon" />
        <img src="" alt="logo" />
        <img src="" alt="profileUser" />
      </header>
      <div id="sub-menu">
        <h3>Nome Grupo</h3>
        <img src="" alt="groupMembers" />
        <button>Convidar</button>
      </div>
      {/* <Content></Content> */}
    </Container>
  );
}

export default Workspace;
