import {
  Container,
  ContainersCheck,
  Header,
  Informacoes,
  Overlay,
} from './styles';
import ImageLogo from '../../assets/logos/logo_fundo_roxo_chapeu.png';
import ImageTarefasFeitas from '../../assets/ImagesCheckListProject/funcionalidades_feitas.png';
import ImageTarefasEmEspera from '../../assets/ImagesCheckListProject/funcionalidades_em_espera.png';

function ChecklistProject() {
  return (
    <>
      <Overlay>
        <Container>
          <Header>
            <img
              src={ImageLogo}
              alt="Logo da empresa"
              title="Logo da empresa"
            />
            <h1>Checklist do Projeto</h1>
          </Header>

          <Informacoes>
            <ContainersCheck>
              <h3>Tarefas feitas</h3>

              <ul>
                <li>
                  <img src={ImageTarefasFeitas} alt="Feito" title="Feito" />
                  <p>Pesquisa de mercado</p>
                </li>
              </ul>
              <ul>
                <li>
                  <img src={ImageTarefasFeitas} alt="Feito" title="Feito" />
                  <p>Pré-requisitos</p>
                </li>
              </ul>
            </ContainersCheck>
            <ContainersCheck>
              <ul>
                <li>
                  <img
                    id="ImageTarefasEmEspera"
                    src={ImageTarefasEmEspera}
                    alt="Em espera"
                    title="Em espera"
                  />
                  <h3>Tarefas em espera</h3>
                </li>
              </ul>

              <ul>
                <li>
                  <input type="radio" name="Espera" value="1" />
                  <p>Pesquisa de mercado</p>
                </li>
              </ul>
              <ul>
                <li>
                  <input type="radio" name="Espera" value="2" />
                  <p>Pré-requisitos</p>
                </li>
              </ul>
            </ContainersCheck>
          </Informacoes>
          <button>Feito!</button>
        </Container>
      </Overlay>
    </>
  );
}

export default ChecklistProject;
