import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import { isSignedIn } from './service/security';
import ConfirmEmail from './pages/ConfirmEmail';
import OrderConfirmEmail from './pages/OrderConfirmEmail';
import RecoverPassword from './components/ModalRecuperarSenha';
import RedefinePassword from "./components/ModalRedefinirSenha";
import ProfileUser from "./pages/PerfilUsuarioAluno";
import ResetEmailPassword from "./components/RedefinirSenhaEmail";
import CreateGroups from "./components/ModalCriarGrupos";
import Group from "./pages/Group";
import Chat from "./pages/Chat";
import WorkSpace from "./pages/WorkSpace";
import SprintReview from "./pages/SprintReview";
import SprintDaily from "./pages/SprintDaily";
import SprintRetrospective from "./pages/SprintRetrospective";


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
        <PrivateRoute path="/group/:id" children={<Group />} />
        <Route path="/chat">
          <Chat />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route path="/orderconfirmemail"> {/*Permissão para enviar o email de confirmação*/}
          <OrderConfirmEmail />
        </Route>
        <Route path="/confirmemail"> {/*Permissão para enviar o email de confirmação*/}
          <ConfirmEmail />
        </Route>
        <Route path="/recoverpassword">
          <RecoverPassword />
        </Route>
        <Route path="/redefinepassword"> {/*Redefinir senha*/}
          <RedefinePassword />
        </Route>
        <PrivateRoute path="/profile"> {/*Perfil do aluno*/}
          <ProfileUser />
        </PrivateRoute>
        <Route path="/resetemailpassword"> {/*Redefinir senha*/}
          <ResetEmailPassword />
        </Route>
        <Route path="/creategroups"> {/*Criar oos*/}
          <CreateGroups />
        </Route>
        <PrivateRoute path="/workspace"> {/*Tela WorkSpace*/}
          <WorkSpace />
        </PrivateRoute>
        <PrivateRoute path="/dailyScrum/:sprintId">
            <SprintDaily/>
        </PrivateRoute>
        <PrivateRoute path="/sprintRetrospective/:sprintId">
            <SprintRetrospective/>
        </PrivateRoute>
        <PrivateRoute path="/sprintReview/:sprintId">
            <SprintReview/>
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;