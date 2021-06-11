import Input from '../Input';
import { Container, Overlay } from './styles';
import { AiOutlineUserAdd } from 'react-icons/ai';
import perfil from '../../assets/ImagesPerfis/image_perfil_aluno.jpg';

function ModalViewTarefa({ handleClose }) {
  return (
    <>
      <Overlay>
        <Container>
          <span onClick={handleClose}>X</span>
          <header>
            <img src="" alt="state"></img>
            <h2>Wiresframes</h2>
          </header>
          <p>Última alteração há 4 dias feita por Fulana</p>
          <div id="addUser">
            <AiOutlineUserAdd />
            <p>Adicionar membros</p>
          </div>
          <img src={perfil} alt="imageUser" id="imageUser" />
          <section>
            <div id="selecetBucket">
              <h3>Bucket</h3>
              <select className="appearance-select">
                <option value="">Sprint Backlog</option>
                <option value="">Em análise</option>
                <option value="">Em desenvolvimento </option>
                <option value="">Em teste</option>
                <option value="">Feito</option>
              </select>
            </div>
            <div id="selecetProgresso">
              <h3>Progresso</h3>
              <select className="appearance-select">
                <option value="">Não iniciada</option>
                <option value="">Em andamento</option>
                <option value="">Concluida </option>
              </select>
            </div>
            <div id="selecetPrioridades">
              <h3>Prioridades</h3>
              <select className="appearance-select">
                <option value="">Urgente</option>
                <option value="">Importante</option>
                <option value="">Média</option>
                <option value="">Baixa</option>
              </select>
            </div>
          </section>
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
          <div id="annotation">
            <h3>Anotações</h3>
            <textarea
              placeholder="Digite uma descrição ou anotações para esta lista..."
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div>
            <h3>Lista de Cartões 0/3</h3>
            <div id="cheklistCard">
              <div>
                <input type="radio" name="radio" />
                <label for="radio">Cartão 1</label>
              </div>
              <div>
                <input type="radio" name="radio" />
                <label for="radio">Cartão 2</label>
              </div>
              <div>
                <input type="radio" name="radio" />
                <label for="radio">Cartão 3</label>
              </div>
            </div>
          </div>
          <div id="">
            <h3>Anexos</h3>
            <input type="file" name="image" />
          </div>
        </Container>
      </Overlay>
    </>
  );
}

export default ModalViewTarefa;
