import Input from '../Input';
import {Container, Overlay} from './styles';

function ModalViewTarefa({handleClose}) {
  return (
    <>
      <Overlay>
        <Container>
          <span onClick={handleClose}>X</span>
          <header>
            <input type="checkbox"></input>
            <h2>Wiresframes</h2>
            <p>
              Última alteração há 4 dias feita por Fulana
            </p>
          </header>
          <div id="">
            <img src="" alt="icon" />
            <p>
              Adicionar membros
            </p>
          </div>
          <section>
            <h3>Bucket</h3>
            <select>
              <option value="">Sprint Backlog</option>
              <option value="">Em análise</option>
              <option value="">Em desenvolvimento </option>
              <option value="">Em teste</option>
              <option value="">Feito</option>
            </select>
          </section>
          <section>
            <h3>Progresso</h3>
            <select>
              <option value="">Não iniciada</option>
              <option value="">Em andamento</option>
              <option value="">Concluida </option>
            </select>
          </section>
          <section>
            <h3>Prioridades</h3>
            <select>
              <option value="">Urgente</option>
              <option value="">Importante</option>
              <option value="">Média</option>
              <option value="">Baixa</option>
            </select>
          </section>
        </Container>
      </Overlay>
    </>
  );
}

export default ModalViewTarefa;
