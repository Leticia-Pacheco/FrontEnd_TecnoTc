import {
  Container,
  ContainerPosts,
  BarraPesquisa,
  LogoTecnoTc,
  NovaPergunta,
  TextoNovaPergunta,
  QuestionCard,
  Send,
  IconSend,
  FormNewQuestion,
} from './styles';
import MenuComponent from '../../components/MenuComponent';
import InputSearchFeed from '../../components/InputSearchFeed';
import ImageLogo from '../../assets/logos/logo_fundo_roxo_png.png';
import Perfil from '../../assets/ImagesFeed/foto_perfil.png';
import Post from '../../assets/ImagesFeed/post.jpg';
import Input from '../../components/InputFeed';
import Modal from '../../components/Modal';
import { useState } from 'react';

function Answer() {
  return (
    <section>
      <header>
        <img src={Perfil} alt="imagem de perfil" />
        <strong> Usuário</strong>
        <p>em 11/11/2011 às 11:11 </p>
      </header>
      <p>Resposta</p>
    </section>
  );
}

function NewPost() {
  return (
    <FormNewQuestion>
      <Input id="title" label="Título" value="" />
      <Input id="description" label="Descrição" value="" />
      <input type="file" />
      <img alt="pré-visualização" />
      <button>Postar</button>
    </FormNewQuestion>
  );
}

function Posts() {
  return (
    <QuestionCard>
      <header>
        <img src={Perfil} alt="Imagem de perfil" />
        <strong> Usuário</strong>
        <p>em 10/10/2010 às 10:10 </p>
      </header>
      <section>
        <strong> Título da pergunta </strong>
        <p> Descrição da pergunta </p>
        <img src={Post} alt="Imagem da publicação" />
      </section>
      <footer>
        <h1> Comentários </h1>
        <Answer />
        <form>
          <textarea placeholder="Digite sua resposta"></textarea>
          <Send>
            <IconSend />
          </Send>
        </form>
      </footer>
    </QuestionCard>
  );
}

function Feed() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      {showModal && (
        <Modal title="Faça uma pergunta">
          <NewPost />
        </Modal>
      )}
      <MenuComponent />
      <BarraPesquisa>
        <LogoTecnoTc>
          <img src={ImageLogo} alt="Logo" title="Logo" />
        </LogoTecnoTc>
        <InputSearchFeed />
        <NovaPergunta>
          <TextoNovaPergunta>
            <p> Nova Pergunta </p>
          </TextoNovaPergunta>
        </NovaPergunta>
      </BarraPesquisa>
      <ContainerPosts>
        <Posts />
        <Posts />
      </ContainerPosts>
    </Container>
  );
}

export default Feed;
