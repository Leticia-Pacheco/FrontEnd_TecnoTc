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
  ButtonAvancarGrupos,
  Agrupamento,
  Anotacoes,
  ButtonAvancarAnotacoes,
  AgrupamentoAnotacoes,
  ComponentAnotacoes,
} from './styles';
import ImgUser from '../../assets/ImagesPerfis/image_perfil_aluno.png';
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
import { api } from '../../service/api';
import { useState } from 'react';
import { useEffect } from 'react';
import ModalEditProfile from '../../components/ModalEditarPerfil';
import ModalAnotation from '../../components/ModalCriarAnotacoes';
import ModalCreateGrup from '../../components/ModalCriarGrupos';
import Loading from '../../components/Loading';
import { getUser, setUser, signOut } from '../../service/security';
import { useHistory } from 'react-router';
import ScrollContainer from 'react-indiana-drag-scroll';
import { BsTrash } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';

function ProfileStudent() {
  const [modalEditProfile, setModalEditProfile] = useState(false);
  const [modalAnotation, setModalAnotation] = useState(false);
  const [modalCreateGrup, setModalCreateGrup] = useState(false);
  const [perfil, setPerfil] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [groups, setGroups] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const user = getUser();

  const loadPerfilInfo = async (reload) => {
    if (user.user.userRole === 'student') {
      const response = await api.get('/students');
      setPerfil(response.data);
      setUser(response.data);
    }
    if (user.user.userRole === 'teacher') {
      const response = await api.get('/teachers');
      setPerfil(response.data);
      setUser(response.data);
    }
  };

  const loadAnnotations = async () => {
    const response = await api.get('/annotations');

    setAnnotations(response.data);
  };

  const handleSignOut = () => {
    signOut();

    history.replace('/');
  };

  const loadGroups = async () => {
    const response = await api.get('/group');
    setGroups(response.data);
  };

  const goGroup = async (e) => {
    history.push(`/group/${e}`);
  };

  const goToFeed = () => {
    history.push('/feed');
  };

  useEffect(() => {
    loadPerfilInfo();
    loadAnnotations();
    loadGroups();
  }, []);

  return (
    <>
      {isLoading && <Loading />}
      {modalEditProfile && (
        <ModalEditProfile
          handleClose={() => {
            setModalEditProfile(false);
            loadPerfilInfo();
          }}
        />
      )}
      {modalAnotation && (
        <ModalAnotation
          handleClose={() => {
            setModalAnotation(false);
            loadAnnotations();
          }}
        />
      )}
      {modalCreateGrup && (
        <ModalCreateGrup
          handleClose={() => {
            setModalCreateGrup(false);
            loadGroups();
            setIsLoading(false);
          }}
          setIsLoading={setIsLoading}
        />
      )}
      <Container>
        <ContainerPerfilConteudo>
          <PerfilInfoUsuario>
            <InformacoesUsuario>
              <ImageUsuario>
                <img
                  src={perfil.profileImage || ImgUser}
                  alt="Foto de perfil do usuário"
                  title="Foto de perfil do usuário"
                />
              </ImageUsuario>
              <TextInfos>
                <span>{perfil.name}</span>
                <p>Senai José Ephim Mindlin | Jandira</p>
              </TextInfos>
            </InformacoesUsuario>

            <MenuLateral>
              <ul>
                <li onClick={goToFeed}>
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
              {perfil.role === 'teacher' && (
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
              )}
              <ul>
                <li onClick={handleSignOut}>
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
            <h3 id="btn-grup" onClick={() => setModalCreateGrup(true)}>
              Meus grupos +
            </h3>

            <Grupos>
              <ButtonAvancarGrupos>
                <img
                  src={buttonVoltar}
                  alt="Avançar para outros componentes"
                  title="Avançar para outros componentes"
                />
              </ButtonAvancarGrupos>
              <ScrollContainer horizontal={true}>
                <Agrupamento>
                  {groups.map((group) => (
                    <ComponentGrupo onClick={() => goGroup(group.id)}>
                      <div id="dropdown">
                        <img
                          src={Configuracoes}
                          alt="Configuração dos grupos"
                          title="Configuração dos grupos"
                        />
                        <div id="dropdown-content">
                          <BsTrash />

                          <MdEdit />
                        </div>
                      </div>
                      {console.log(group)}
                      <ImageGrupo
                        src={group.image ? group.image : ImgUser}
                      ></ImageGrupo>
                      <p>{group.name}</p>
                    </ComponentGrupo>
                  ))}
                </Agrupamento>
              </ScrollContainer>
              <ButtonAvancarGrupos>
                <img
                  src={buttonAvancar}
                  alt="Avançar para outros componentes"
                  title="Avançar para outros componentes"
                />
              </ButtonAvancarGrupos>
            </Grupos>

            <h3 id="btn-anotation" onClick={() => setModalAnotation(true)}>
              Anotações +
            </h3>
            <Anotacoes>
              <ButtonAvancarAnotacoes>
                <img
                  src={buttonVoltar}
                  alt="Avançar para outros componentes"
                  title="Avançar para outros componentes"
                />
              </ButtonAvancarAnotacoes>
              <ScrollContainer>
                <AgrupamentoAnotacoes>
                  {annotations.map((annotation) => (
                    <ComponentAnotacoes key={annotation.id}>
                      <p>{annotation.title}</p>
                      <div id="dropdown">
                        <img
                          src={ConfiguracoesAnotacoes}
                          alt="Configuração dos grupos"
                          title="Configuração dos grupos"
                        />
                        <div id="dropdown-content">
                          <BsTrash />
                          <MdEdit />
                        </div>
                      </div>
                    </ComponentAnotacoes>
                  ))}
                </AgrupamentoAnotacoes>
              </ScrollContainer>
              <ButtonAvancarAnotacoes>
                <img
                  src={buttonAvancar}
                  alt="Avançar para outros componentes"
                  title="Avançar para outros componentes"
                />
              </ButtonAvancarAnotacoes>
            </Anotacoes>
          </Conteudo>
        </ContainerPerfilConteudo>
        <Footer>
          <p>Copyright © 2021 | TecnoTc Todos os direitos reservados</p>
        </Footer>
      </Container>
    </>
  );
}

export default ProfileStudent;
