import {
  Container,
  Conteudo,
  Header,
  SobreNos,
  Oferecemos,
  NossoApp,
  Equipe,
  Footer,
  MenuContainer,
  Logo,
  TextoHeader,
  Informacoes,
  OferecItem,
  TextoNossoApp,
  ImageApp,
  PerfisEquipe,
  Contatos,
  TermosPrivacidade,
} from './styles';
import ImageLogo from '../../assets/logos/logo_fundo_roxo.png';
import GifImageHeader from '../../assets/ImagesHome/gif_apresentacao.gif';
import GifImageQuemSomos from '../../assets/ImagesHome/gif_quem_somos.gif';
import ImgOferInteracao from '../../assets/ImagesHome/oferecemos_interacao.jpeg';
import ImgOferCriarGrupos from '../../assets/ImagesHome/oferecemos_grupos.jpeg';
import ImgOferPosts from '../../assets/ImagesHome/oferecemos_posts.gif';
import ImgOferAnotacoes from '../../assets/ImagesHome/oferecemos_anotacoes.jpeg';
import ImgOferChats from '../../assets/ImagesHome/oferecemos_chats.jpeg';
import ImgApp from '../../assets/ImagesHome/nosso_app.png';
import IntegLeticia from '../../assets/ImagesHome/leticia2.jpg';
import IntegDaniel from '../../assets/ImagesHome/daniel.jpg';
import IntegKarina from '../../assets/ImagesHome/karina.jpg';
import IntegBianca from '../../assets/ImagesHome/bianca.jpg';
import ContWhatsapp from '../../assets/ImagesHome/contato_whatsapp.png';
import ContInstagram from '../../assets/ImagesHome/contato_instagram.png';
import ContEmail from '../../assets/ImagesHome/contato_email.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Container>
        <Conteudo>
          <Header>
            <MenuContainer>
              <Logo>
                <img src={ImageLogo} alt="Logo" title="Logo" />
              </Logo>

              <ul>
                <li>Nossa equipe</li>
                <li>Conheça nosso app!</li>
                <li>O que oferecemos?</li>
                <li>
                  <a href="#SobreNos">Quem somos nós?</a>
                </li>
              </ul>
            </MenuContainer>
            <TextoHeader>
              <h1>A TecnoTc te ajuda a alcançar seu objetivo!</h1>
              <p>
                A plataforma perfeita para manter sua organização durante a
                criação de seu TCC. Experimente!
              </p>

              <button>
                <Link to="/Register">Comece por aqui!</Link>
              </button>
              <span>
                <Link to="/login">Possui uma conta?</Link>
              </span>
            </TextoHeader>
            <div id="div-gif-header">
              <img
                id="gif-animado-header"
                src={GifImageHeader}
                alt="Gif animado"
                title="Gif animado"
              />
            </div>
          </Header>
          <SobreNos>
            <h1>Quem somos nós?</h1>

            <Informacoes>
              <img
                src={GifImageQuemSomos}
                alt="Imagem da seção Quem somos nós"
                title="Imagem da seção Quem somos nós"
              />
              <p>
                A TecnoTc é uma plataforma que visa facilitar o processo de
                criação de Trabalhos acadêmicos, prevendo ótimos resultados e
                auxiliando no desempenho do grupo.
              </p>
            </Informacoes>
          </SobreNos>
          <Oferecemos>
            <h1>O que oferecemos?</h1>
            <Informacoes>
              <OferecItem>
                <img
                  src={ImgOferInteracao}
                  alt="O que oferecemos - Interação"
                  title="O que oferecemos - Interação"
                />
                <p>Interação entre alunos e professores</p>
              </OferecItem>
              <OferecItem>
                <img
                  src={ImgOferCriarGrupos}
                  alt="O que oferecemos - Grupos"
                  title="O que oferecemos - Grupos"
                />
                <p>Criação de grupos de alunos e professores</p>
              </OferecItem>
              <OferecItem>
                <img
                  src={ImgOferPosts}
                  alt="O que oferecemos - Posts"
                  title="O que oferecemos - Posts"
                />
                <p>Postagens de dúvidas e respostas</p>
              </OferecItem>
            </Informacoes>
            <Informacoes>
              <OferecItem>
                <img
                  src={ImgOferAnotacoes}
                  alt="O que oferecemos - Anotações"
                  title="O que oferecemos - Anotações"
                />
                <p>Criação de anotações pessoais</p>
              </OferecItem>
              <OferecItem>
                <img
                  src={ImgOferChats}
                  alt="O que oferecemos - Chats"
                  title="O que oferecemos - Chats"
                />
                <p>Chats interativos</p>
              </OferecItem>
            </Informacoes>
          </Oferecemos>
          <NossoApp>
            <Informacoes>
              <TextoNossoApp>
                <h1>Conheça nosso app!</h1>
                <p>
                  Pensando em nossos usuários, a TecnoTc estendeu a plataforma
                  para uma versão mobile para que, de onde estiverem, possam
                  acessar ter acesso aos conteúdos e atividades. De forma
                  prática e rápida, o seu projeto na palma da sua mão!
                </p>
              </TextoNossoApp>
              <ImageApp>
                <img src={ImgApp} alt="Nosso app" title="Nosso app" />
              </ImageApp>
            </Informacoes>
          </NossoApp>
          <Equipe>
            <h1>Nossa equipe</h1>
            <p>
              Nos esforçamos para que nossos usuários sempre tenham uma ótima
              experiência ao usarem a plataforma!
            </p>

            <Informacoes>
              <PerfisEquipe>
                <h3>Diretora Geral</h3>
                <img
                  src={IntegLeticia}
                  alt="Imagem de um dos integrantes da equipe"
                  title="Imagem de um dos integrantes da equipe"
                />
                <span>Letícia Pacheco</span>
                <p>Desenvolvedora Front-end web e mobile</p>
              </PerfisEquipe>
              <PerfisEquipe>
                <h2>Gerente de Desenvolvimento</h2>
                <img
                  src={IntegDaniel}
                  alt="Imagem de um dos integrantes da equipe"
                  title="Imagem de um dos integrantes da equipe"
                />
                <span>Daniel Vitor</span>
                <p>Desenvolvedor Back-end e banco de dados</p>
              </PerfisEquipe>
              <PerfisEquipe>
                <h3>Gerente Financeiro</h3>
                <img
                  src={IntegKarina}
                  alt="Imagem de um dos integrantes da equipe"
                  title="Imagem de um dos integrantes da equipe"
                />
                <span>Karina Soares</span>
                <p>Desenvolvedora Front-end web e mobile</p>
              </PerfisEquipe>
              <PerfisEquipe>
                <h3>Gerente Jurídico</h3>
                <img
                  src={IntegBianca}
                  alt="Imagem de um dos integrantes da equipe"
                  title="Imagem de um dos integrantes da equipe"
                />
                <span>Bianca Giovanna</span>
                <p>Desenvolvedora Front-end web</p>
              </PerfisEquipe>
            </Informacoes>
          </Equipe>

          <Footer>
            <Contatos>
              <ul>
                <li>
                  <img
                    src={ContWhatsapp}
                    alt="Contato para whatsapp"
                    title="Contato para whatsapp"
                  />
                  <p>(11) 94981-9506</p>
                </li>
                <li>
                  <img
                    src={ContInstagram}
                    alt="Contato para instagram"
                    title="Contato para instagram"
                  />
                  <p>tecnotc_</p>
                </li>
                <li>
                  <img
                    src={ContEmail}
                    alt="Contato para email"
                    title="Contato para email"
                  />
                  <p>tecnotc@gmail.com</p>
                </li>
              </ul>
            </Contatos>

            <TermosPrivacidade>
              <p>Copyright © 2021 TecnoTc Ltda.</p>
              <p>Todos os direitos reservados.</p>
              <p>#FiqueEmCasa</p>
            </TermosPrivacidade>

            <Logo>
              <img src={ImageLogo} alt="Logo" title="Logo" />
            </Logo>
          </Footer>
        </Conteudo>
      </Container>
    </>
  );
}

export default Home;
