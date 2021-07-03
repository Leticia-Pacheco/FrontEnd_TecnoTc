import {
  Overlay,
  ModalEditarPerfil,
  Header,
  ImagemUsuario,
  EditarImagemUsuario,
  Logo,
  EditarDados,
  ComponentEditarDados,
} from './styles';
import ImageUsuario from '../../assets/ImagesPerfis/image_perfil_aluno.png';
import ImageLogo from '../../assets/logos/logo_fundo_roxo_png.png';
import {getUser} from '../../service/security';
import {api} from '../../service/api';
import {useState} from 'react';
import {toast} from 'react-toastify';
import Toast from '../../components/Toast';
import 'react-toastify/dist/ReactToastify.css';
function EditProfile({handleClose, setIsLoading}) {
  const [editPerfil, setEditPerfil] = useState({
    email: '',
    name: '',
    currentPassword: '',
    newPassword: '',
    repeatNewPassword: '',
  });

  const notify = (message, type) => {
    toast[type](message);
  };
  const validPassword = () =>
    editPerfil.newPassword === editPerfil.repeatNewPassword;

  const handleSubmit = async (e) => {
    if(!validPassword()) return alert('As senhas precisam ser iguais!');

    e.preventDefault();

    try {
      const user = getUser();
      console.log(user.token);
      let userRoute;

      if(user.userRole === 'teacher') userRoute = 'teachers';
      else userRoute = 'students';


      setIsLoading(true);
      const response = await api.put(`/${userRoute}`, {
        name: editPerfil.name,
        email: editPerfil.email,
        currentPassword: editPerfil.currentPassword,
        newPassword: editPerfil.newPassword,
      });

      notify('O seu perfil foi atualizado com sucesso', 'success');
      setTimeout(() => {
        handleClose();
      }, 1500);
    } catch(error) {
      console.error(error);
      setIsLoading(false);
      notify(error.response.data.error, 'error');
    }
  };

  const handleInput = (e) => {
    setEditPerfil({...editPerfil, [e.target.id]: e.target.value});
  };

  return (
    <Overlay>
      <Toast />
      <ModalEditarPerfil>
        <Header>
          <ImagemUsuario>
            <img
              src={ImageUsuario}
              alt="Alterar imagem perfil de usuário"
              title="Alterar imagem perfil de usuário"
            />
            <EditarImagemUsuario>
              <label for="arquivo">Editar imagem</label>
              <input type="file" name="arquivo" id="arquivo" />
            </EditarImagemUsuario>
          </ImagemUsuario>

          <h3>Editar perfil pessoal</h3>

          <Logo>
            <img
              src={ImageLogo}
              alt="Logo da empresa"
              title="Logo da empresa"
            />
          </Logo>
          <span onClick={handleClose}>X</span>
        </Header>

        <EditarDados onSubmit={handleSubmit}>
          <ComponentEditarDados>
            <p>Nome</p>
            <input
              type="text"
              id="name"
              size="43"
              onChange={handleInput}
              value={editPerfil.name}
            />
          </ComponentEditarDados>
          <ComponentEditarDados>
            <p>E-mail</p>
            <input
              type="text"
              id="email"
              size="43"
              onChange={handleInput}
              value={editPerfil.email}
            />
            <span>Adicionar mais um e-mail +</span>
          </ComponentEditarDados>
          <ComponentEditarDados>
            <p>Você é</p>
            <input type="text" id="role" value="Teacher" size="43" />
          </ComponentEditarDados>
          <ComponentEditarDados>
            <p>Senha atual</p>
            <input
              type="password"
              id="currentPassword"
              onChange={handleInput}
              value={editPerfil.currentPassword}
            />
          </ComponentEditarDados>
          <ComponentEditarDados>
            <p>Nova Senha</p>
            <input
              type="password"
              id="newPassword"
              size="43"
              onChange={handleInput}
              value={editPerfil.newPassword}
            />
          </ComponentEditarDados>
          <ComponentEditarDados>
            <p>Repetir senha</p>
            <input
              type="password"
              id="repeatNewPassword"
              size="43"
              onChange={handleInput}
              value={editPerfil.repeatNewPassword}
            />
          </ComponentEditarDados>
          <button>
            <p>Salvar dados</p>
          </button>
        </EditarDados>
      </ModalEditarPerfil>
    </Overlay>
  );
}

export default EditProfile;
