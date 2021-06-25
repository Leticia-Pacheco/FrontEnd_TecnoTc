import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
<<<<<<< HEAD
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
import ChecklistProject from "./components/ChecklistProject";


function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
=======
import {isSignedIn} from './service/security';
import ConfirmEmail from './pages/ConfirmEmail';
import ConfirmGroup from './pages/ConfirmGroup';
import OrderConfirmEmail from './pages/OrderConfirmEmail';
import RecoverPassword from './components/ModalRecuperarSenha';
import RedefinePassword from './components/ModalRedefinirSenha';
import ProfileUser from './pages/PerfilUsuarioAluno';
import ResetEmailPassword from './components/RedefinirSenhaEmail';
import CreateGroups from './components/ModalCriarGrupos';
import Group from './pages/Group';
import Chat from './pages/Chat';
import WorkSpace from './pages/WorkSpace';
import SprintReview from './pages/SprintReview';
import SprintDaily from './pages/SprintDaily';
import SprintRetrospective from './pages/SprintRetrospective';
import Feed from './pages/Feed';

function PrivateRoute({children, ...rest}) {
  if(isSignedIn()) {
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to="/login" />;
  }
}
function Router() {
  return (
    <BrowserRouter>
      <Switch>
<<<<<<< HEAD
        <Route exact path="/">
          <Home />
=======
        <PrivateRoute path="/group/:id" children={<Group />} />
        <Route path="/chat">
          <Chat />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
        </Route>

        <Route path="/Register">
          <Register />
        </Route>
<<<<<<< HEAD
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
        <Route path="/checklistproject">
          <ChecklistProject/>
        </Route>
=======
        <Route path="/orderconfirmemail">
          {' '}
          {/*Permissão para enviar o email de confirmação*/}
          <OrderConfirmEmail />
        </Route>
        <Route path="/confirmemail">
          {' '}
          {/*Permissão para enviar o email de confirmação*/}
          <ConfirmEmail />
        </Route>
        <Route path="/recoverpassword">
          <RecoverPassword />
        </Route>
        <Route path="/redefinepassword">
          {' '}
          {/*Redefinir senha*/}
          <RedefinePassword />
        </Route>
        <PrivateRoute path="/profile">
          {' '}
          {/*Perfil do aluno*/}
          <ProfileUser />
        </PrivateRoute>
        <PrivateRoute path="/feed">
          <Feed />
        </PrivateRoute>
        <Route path="/resetemailpassword">
          {' '}
          {/*Redefinir senha*/}
          <ResetEmailPassword />
        </Route>
        <Route path="/creategroups">
          {' '}
          {/*Criar oos*/}
          <CreateGroups />
        </Route>
        <PrivateRoute path="/confirmGroup/:inviteToken">
          <ConfirmGroup />
        </PrivateRoute>
        <PrivateRoute path="/workspace/:workspaceId/:id" children={<WorkSpace />}>
        </PrivateRoute>
        <PrivateRoute path="/dailyScrum/:sprintId" children={<SprintDaily />}>
        </PrivateRoute>
        <PrivateRoute
          path="/workspace/:workspaceId/:id"
          children={<WorkSpace />}
        ></PrivateRoute>
        <PrivateRoute
          path="/dailyScrum/:sprintId"
          children={<SprintDaily />}
        ></PrivateRoute>
        <PrivateRoute
          path="/sprintRetrospective/:sprintId"
          children={<SprintRetrospective />}
        ></PrivateRoute>
        <PrivateRoute
          path="/sprintReview/:sprintId"
          children={<SprintReview />}
        ></PrivateRoute>
>>>>>>> acbb8121a585bc1eabb4d67d484d742a3efef718
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
