import {Container, Overlay} from './styles';
import logo from '../../assets/logos/logo_telas.png';

function InviteStudent({handleClose}) {

  return (
    <>
      <Overlay>
        <Container>
          <span onClick={handleClose}>X</span>
          <header>
            <img src={logo} alt="logo" />
            <h1>Criar nova Sprint</h1>
          </header>
          <h2>Nome</h2>
          <input
            id="title"
            placeholder="Digite o nome da Spint"
            required
          />
          <h3>Data estimada</h3>
          <div id="date">
            <div id="dateStart">
              <h3>Data de início</h3>
              <input type="Date" />
            </div>
            <div id="dateEnd">
              <h3>Data de Termino</h3>
              <input type="Date" />
            </div>
          </div>
          <div id="btn">
            <button>Criar nova Sprint</button>
          </div>
        </Container>
      </Overlay>
    </>
  );
}

export default InviteStudent;
