import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { isSignedIn } from './service/security';
// import ConfirmEmail from './pages/ConfirmEmail';
import OrderConfirmEmail from './pages/OrderConfirmEmail';
import RecoverPassword from './components/ModalRecuperarSenha';
import RedefinePassword from "./components/ModalRedefinirSenha";
import ProfileTeacher from "./pages/PerfilUsuarioProf";
import ProfileStudent from "./pages/PerfilUsuarioAluno";
import ResetEmailPassword from "./components/RedefinirSenhaEmail";
import EditProfile from "./components/ModalEditarPerfil";
import CreateGroups from "./components/ModalCriarGrupos";
import CreateAnotacoes from "./components/ModalCriarAnotacoes";
import SprintRetrospective from "./pages/SprintRetrospective";
import SprintReview from "./pages/SprintReview";
import SprintDaily from "./pages/SprintDaily";

function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to="/" />;
  }
}
function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/orderconfirmemail"> {/*Permissão para enviar o email de confirmação*/}
          <OrderConfirmEmail />
        </Route>
        <Route path="/recoverpassword"> {/*Recuperar senha*/}
          <RecoverPassword/>
        </Route>
        <Route path="/redefinepassword"> {/*Redefinir senha*/}
          <RedefinePassword/>
        </Route>
        <Route path="/profileteacher"> {/*Perfil do professor*/}
          <ProfileTeacher/>
        </Route>
        <Route path="/profilestudent"> {/*Perfil do aluno*/}
          <ProfileStudent/>
        </Route>
        <Route path="/resetemailpassword"> {/*Redefinir senha*/}
          <ResetEmailPassword/>
        </Route>
        <Route path="/editprofile"> {/*Editar perfil*/}
          <EditProfile/>
        </Route>
        <Route path="/creategroups"> {/*Criar grupos*/}
          <CreateGroups/>
        </Route>
        <Route path="/createanotacoes"> {/*Criar grupos*/}
          <CreateAnotacoes/>
        </Route>
        <Route path="/sprintRetrospective">
          <SprintRetrospective/>
        </Route>
        <Route path="/sprintReview">
          <SprintReview/>
        </Route>
        <Route path="/sprintDaily">
          <SprintDaily/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;