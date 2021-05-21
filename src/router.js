import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {isSignedIn} from './service/security';
import OrderConfirmEmail from './pages/OrderConfirmEmail';
import RecuperarSenha from './components/ModalRecuperarSenha';
import RedefinirSenha from "./components/ModalRedefinirSenha";
import PerfilProfessor from "./pages/PerfilUsuarioProf";
import PerfilAluno from "./pages/PerfilUsuarioAluno";

function PrivateRoute({children, ...rest}) {
  if(isSignedIn()) {
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
          <Login />
        </Route>

        <Route path="/Register">
          <Register />
        </Route>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route path="/confirmemail">
          <OrderConfirmEmail />
        </Route>
        <Route path="/recoverpassword">
          <RecuperarSenha />
        </Route>
        <Route path="/passwordreset">
          <RedefinirSenha />
        </Route>
        <Route path="/perfilprofessor">
          <PerfilProfessor />
        </Route>
        <Route path="/perfilaluno">
          <PerfilAluno />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;