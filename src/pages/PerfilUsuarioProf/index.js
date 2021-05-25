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
  ImageGrupo,
  Agrupamento,
  ButtonAvancarGrupos,
  ButtonAvancarAnotacoes,
  Anotacoes,
  ComponentAnotacoes,
  AgrupamentoAnotacoes,
  // Logo,
} from './styles';
import ImgUsuarioAluno from '../../assets/ImagesPerfis/image_perfil_professor.jpg';
import ImageFeed from '../../assets/ImagesPerfis/home_feed.png';
import ImageTarefas from '../../assets/ImagesPerfis/tarefas.png';
import ImageReunioesDiarias from '../../assets/ImagesPerfis/reunioes_diarias.png';
import ImageChats from '../../assets/ImagesPerfis/chats.png';
import ImageVisuAlunos from '../../assets/ImagesPerfis/ver_meus_alunos.png';
import ImageLogout from '../../assets/ImagesPerfis/sair.png';
import Configuracoes from '../../assets/ImagesPerfis/configuracao_grupos.png';
import buttonAvancar from '../../assets/ImagesPerfis/seta_passar_itens.png';
import buttonVoltar from '../../assets/ImagesPerfis/seta_voltar_itens.png';
import ConfiguracoesAnotacoes from '../../assets/ImagesPerfis/configuracao_anotacoes.png';
import {api} from '../../service/api';
import {useState} from 'react';
import {useEffect} from 'react';
import ModalEditProfile from '../../components/ModalEditarPerfil';
import ModalAnotation from '../../components/ModalCriarAnotacoes';
import ModalCreateGrup from '../../components/ModalCriarGrupos';

function ProfileTeacher() {
  const [modalEditProfile, setModalEditProfile] = useState(false);
  const [modalAnotation, setModalAnotation] = useState(false);
  const [modalCreateGrup, setModalCreateGrup] = useState(false);
  const [perfil, setPerfil] = useState({});

  const loadPerfilInfo = async (reload) => {

    const response = await api.get("/teachers");

    setPerfil(response.data.Teacher);

  };

  useEffect(() => {
    loadPerfilInfo();
  }, []);

  return (
    <>
      {modalEditProfile && <ModalEditProfile handleClose={() => setModalEditProfile(false)} />}
      {modalAnotation && <ModalAnotation handleClose={() => setModalAnotation(false)} />}
      {modalCreateGrup && <ModalCreateGrup handleClose={() => setModalCreateGrup(false)} />}
      <Container>
        <ContainerPerfilConteudo>
          <PerfilInfoUsuario>
            <InformacoesUsuario>
              <ImageUsuario>
                <img
                  src={perfil.profileImage || ImgUsuarioAluno}
                  alt="Foto de perfil do usuário"
                  title="Foto de perfil do usuário"
                />
              </ImageUsuario>
              <TextInfos>
                <span>{perfil.name}</span>
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
                    src={ImageVisuAlunos}
                    alt="Menu opção visualizar progresso de alunos"
                    title="Menu opção visualizar progresso de alunos"
                  />
                  <p>Visualizar alunos</p>
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

            <EditarPerfil onClick={() => setModalEditProfile(true)}>
              <img
                src={Configuracoes}
                alt="Configurações do perfil"
                title="Configurações do perfil"
              />
              <p>Editar perfil</p>
            </EditarPerfil>
          </PerfilInfoUsuario>

          <Conteudo>
            <h3 id="btn-grup" onClick={() => setModalCreateGrup(true)}>Meus grupos +</h3>
            <Grupos>
              <ButtonAvancarGrupos>
                <img src={buttonVoltar} alt="Avançar para outros componentes" title="Avançar para outros componentes" />
              </ButtonAvancarGrupos>
              <Agrupamento>

                <ComponentGrupo>
                  <img src={Configuracoes} alt="Configuração dos grupos" title="Configuração dos grupos" />
                  <ImageGrupo>
                    <p>DS</p>
                  </ImageGrupo>
                  <p>Desenvolvimento de sistemas</p>
                </ComponentGrupo>

              </Agrupamento>
              <ButtonAvancarGrupos>
                <img src={buttonAvancar} alt="Avançar para outros componentes" title="Avançar para outros componentes" />
              </ButtonAvancarGrupos>
            </Grupos>
            <h3 id="btn-anotation" onClick={() => setModalAnotation(true)}>Anotações +</h3>
            <Anotacoes>
              <ButtonAvancarAnotacoes>
                <img src={buttonVoltar} alt="Avançar para outros componentes" title="Avançar para outros componentes" />
              </ButtonAvancarAnotacoes>
              <AgrupamentoAnotacoes>

                <ComponentAnotacoes>
                  <p>03-11-2020</p>
                  <img src={ConfiguracoesAnotacoes} alt="Configuração de anotações" title="Configuração de anotações" />
                </ComponentAnotacoes>
                <ComponentAnotacoes>
                  <p>03-11-2020</p>
                  <img src={ConfiguracoesAnotacoes} alt="Configuração de anotações" title="Configuração de anotações" />
                </ComponentAnotacoes>
                <ComponentAnotacoes>
                  <p>03-11-2020</p>
                  <img src={ConfiguracoesAnotacoes} alt="Configuração de anotações" title="Configuração de anotações" />
                </ComponentAnotacoes>
                <ComponentAnotacoes>
                  <p>03-11-2020</p>
                  <img src={ConfiguracoesAnotacoes} alt="Configuração de anotações" title="Configuração de anotações" />
                </ComponentAnotacoes>
              </AgrupamentoAnotacoes>

              <ButtonAvancarAnotacoes>
                <img src={buttonAvancar} alt="Avançar para outros componentes" title="Avançar para outros componentes" />
              </ButtonAvancarAnotacoes>
            </Anotacoes>
          </Conteudo>
        </ContainerPerfilConteudo>
      </Container>
      <Footer>
        <p>Copyright © 2021 | TecnoTc Todos os direitos reservados</p>

        {/* <Logo>
            <img src={ImageLogo} alt="Logo da empresa" title="Logo da empresa"/>
          </Logo> */}
      </Footer>
    </>
  );
}

export default ProfileTeacher;