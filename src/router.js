import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';
import { isSignedIn } from './service/security';
// import ConfirmEmail from './pages/ConfirmEmail';
import OrderConfirmEmail from './pages/OrderConfirmEmail';
import RecuperarSenha from './components/ModalRecuperarSenha';
import RedefinirSenha from "./components/ModalRedefinirSenha";
import PerfilProfessor from "./pages/PerfilUsuarioProf";
import PerfilAluno from "./pages/PerfilUsuarioAluno";
import RedefinirSenhaEmail from "./components/ModalRedefinirSenha";

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
          <Login />
        </Route>

        <Route path="/Register">
          <Register />
        </Route>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route path="/orderconfirmemail">
          <OrderConfirmEmail />
        </Route>
        <Route path="/recuperarsenha">
          <RecuperarSenha/>
        </Route>
        <Route path="/redefinirsenha">
          <RedefinirSenha/>
        </Route>
        <Route path="/perfilprofessor">
          <PerfilProfessor/>
        </Route>
        <Route path="/perfilaluno">
          <PerfilAluno/>
        </Route>
        <Route path="/redefinirsenhaemail">
          <RedefinirSenhaEmail/>
        </Route>       
      </Switch>
    </BrowserRouter>
  );
}

export default Router;