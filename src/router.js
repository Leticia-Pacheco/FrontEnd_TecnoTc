import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {isSignedIn} from './service/security';
import ConfirmGroup from './pages/ConfirmGroup';
import OrderConfirmEmail from './pages/OrderConfirmEmail';
import RecoverPassword from './components/ModalRecuperarSenha';
import RedefinePassword from './components/ModalRedefinirSenha';
import ProfileUser from './pages/PerfilUsuarioAluno';
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
    return <Route {...rest}>{children}</Route>;
  } else {
    return <Redirect to="/login" />;
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
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
        <Route path="/orderconfirmemail">
          {' '}
          {/*Permissão para enviar o email de confirmação*/}
          <OrderConfirmEmail />
        </Route>
        {/* <Route path="/confirmemail">
    
          <ConfirmEmail />
        </Route> */}
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
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
