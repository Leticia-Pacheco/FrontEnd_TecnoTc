import {
  Container,
  ContainerPerfilConteudo,
  Footer,
  PerfilInfoUsuario,
  Conteudo,
  InformacoesUsuario,
  ImageUsuario,
  TextInfos,
  MenuLateral,
  EditarPerfil,
  Grupos,
  ComponentGrupo,
} from './styles';
import ImgUsuarioAluno from '../../assets/ImagesPerfis/image_perfil_professor.jpg';
import ImageFeed from '../../assets/ImagesPerfis/home_feed.png';
import ImageTarefas from '../../assets/ImagesPerfis/tarefas.png';
import ImageReunioesDiarias from '../../assets/ImagesPerfis/reunioes_diarias.png';
import ImageChats from '../../assets/ImagesPerfis/chats.png';
import ImageLogout from '../../assets/ImagesPerfis/sair.png';
import Configuracoes from '../../assets/ImagesPerfis/configuracao_grupos.png';

function ProfileStudent() {
  return (
    <>
      <Container>
        <ContainerPerfilConteudo>
          <PerfilInfoUsuario>
            <InformacoesUsuario>
              <ImageUsuario>
                <img
                  src={ImgUsuarioAluno}
                  alt="Foto de perfil do usuário"
                  title="Foto de perfil do usuário"
                />
              </ImageUsuario>
              <TextInfos>
                <span>Larissa Pacheco</span>
                <p>Senai Prof Vicente Amato | Jandira</p>
              </TextInfos>
            </InformacoesUsuario>

            <MenuLateral>
              <ul>
                <li>
                  <img
                    src={ImageFeed}
                    alt="Menu opção feed"
                    title="Menu opção feed"
                  />
                  <p>Feed</p>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={ImageTarefas}
                    alt="Menu opção tarefas"
                    title="Menu opção tarefas"
                  />
                  <p>Tarefas</p>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={ImageReunioesDiarias}
                    alt="Menu opção reuniões diárias"
                    title="Menu opção reuniões diárias"
                  />
                  <p>Reuniões diárias</p>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={ImageChats}
                    alt="Menu opção Chats"
                    title="Menu opção Chats"
                  />
                  <p>Chats</p>
                </li>
              </ul>
              <ul>
                <li>
                  <img
                    src={ImageLogout}
                    alt="Menu opção Sair da aplicação"
                    title="Menu opção Sair da aplicação"
                  />
                  <p>Sair</p>
                </li>
              </ul>
            </MenuLateral>

            <EditarPerfil>
              <img
                src={Configuracoes}
                alt="Configurações do perfil"
                title="Configurações do perfil"
              />
              <p>Editar perfil</p>
            </EditarPerfil>
          </PerfilInfoUsuario>

          <Conteudo>
              <Grupos>
                  <h3>Meus grupos</h3>

                  <ComponentGrupo>
                      <img src={Configuracoes}/>
                  </ComponentGrupo>
              </Grupos>
          </Conteudo>
        </ContainerPerfilConteudo>
      </Container>
      <Footer>
        <p>Copyright © 2021 | TecnoTc Todos os direitos reservados</p>
      </Footer>
    </>
  );
}

export default ProfileStudent;
