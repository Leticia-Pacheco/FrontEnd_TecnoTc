import { Container, Conteudo, Header, SobreNos, Oferecemos, NossoApp, Equipe, Footer, MenuContainer, Logo, TextoHeader, Informacoes, OferecItem, } from "./styles";
import ImageLogo from "../../assets/logos/logo_fundo_roxo.png";
import GifImageHeader from "../../assets/ImagesHome/gif_apresentacao.gif";
import GifImageQuemSomos from "../../assets/ImagesHome/gif_quem_somos.gif";
import ImgOferInteracao from "../../assets/ImagesHome/oferecemos_interacao.jpeg";
import ImgOferCriarGrupos from "../../assets/ImagesHome/oferecemos_grupos.jpeg";
import ImgOferPosts from "../../assets/ImagesHome/oferecemos_posts.jpeg";
import ImgOferAnotacoes from "../../assets/ImagesHome/oferecemos_anotacoes.jpeg";
import ImgOferChats from "../../assets/ImagesHome/oferecemos_chats.jpeg";

function Home() {
  return(
   <>
    <Container>
      <Conteudo>
        <Header>
          <MenuContainer>
            <Logo>
              <img src={ImageLogo} alt="Logo" title="Logo"/>
            </Logo>

            <ul>
              <li>Quem somos nós?</li>
              <li>O que oferecemos?</li>
              <li>Conheça nosso app!</li>
              <li>Nossa equipe</li>
            </ul>
          </MenuContainer>
            <TextoHeader>
              <h1>A TecnoTc te ajuda a alcançar seu objetivo!</h1>
              <p>A plataforma perfeita para manter sua organização durante a criação de seu TCC. Experimente!</p>

              <button>Comece por aqui!</button>
              <span>Possui uma conta?</span>
            </TextoHeader>
            <img src={GifImageHeader} alt="Gif animado" title="Gif animado"/>
        </Header>
        <SobreNos>
          <h1>Quem somos nós?</h1>

          <Informacoes>
            <img src={GifImageQuemSomos} alt="Imagem da seção Quem somos nós" title="Imagem da seção Quem somos nós"/>
            <p>A TecnoTc é uma plataforma que visa facilitar o processo de criação de Trabalhos acadêmicos, prevendo ótimos resultados 
               e auxiliando no desempenho do grupo.</p>
          </Informacoes>
        </SobreNos>
        <Oferecemos>
          <h1>O que oferecemos?</h1>
          <Informacoes>
            <OferecItem>
              <img src={ImgOferInteracao} alt="O que oferecemos - Interação" title="O que oferecemos - Interação"/>
              <p>Interação entre alunos e professores</p>
            </OferecItem>
            <OferecItem>
              <img src={ImgOferCriarGrupos} alt="O que oferecemos - Grupos" title="O que oferecemos - Grupos"/>
              <p>Criação de grupos de alunos e professores</p>
            </OferecItem>
            <OferecItem>
              <img src={ImgOferPosts} alt="O que oferecemos - Posts" title="O que oferecemos - Posts"/>
              <p>Postagens de dúvidas e respostas</p>
            </OferecItem>
          </Informacoes>
          <Informacoes>
            <OferecItem>
              <img src={ImgOferAnotacoes} alt="O que oferecemos - Anotações" title="O que oferecemos - Anotações"/>
              <p>Criação de anotações pessoais</p>
            </OferecItem>
            <OferecItem>
              <img src={ImgOferChats} alt="O que oferecemos - Chats" title="O que oferecemos - Chats"/>
              <p>Chats interativos</p>
            </OferecItem>
          </Informacoes>
        </Oferecemos>

        <NossoApp>

        </NossoApp>

        <Equipe>

        </Equipe>
        
        <Footer>
          
        </Footer>
      </Conteudo>
    </Container>
   </> 
  )  
}

export default Home;