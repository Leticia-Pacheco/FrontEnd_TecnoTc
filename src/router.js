<<<<<<< HEAD
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Register from './pages/Register';
import { isSignedIn } from './service/security';
// import ConfirmEmail from './pages/ConfirmEmail';
import OrderConfirmEmail from './pages/OrderConfirmEmail';
import ConfirmEmail from './pages/ConfirmEmail';
function PrivateRoute({ children, ...rest }) {
  if (isSignedIn()) {
=======
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import {isSignedIn} from './service/security';
// import ConfirmEmail from './pages/ConfirmEmail';
import OrderConfirmEmail from './pages/OrderConfirmEmail';
import RecuperarSenha from './components/ModalRecuperarSenha';
import RedefinirSenha from './components/ModalRedefinirSenha';

function PrivateRoute({children, ...rest}) {
  if(isSignedIn()) {
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
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
<<<<<<< HEAD
        <Route path="/orderconfirmemail">
          <OrderConfirmEmail />
        </Route>
        <Route path="/confirmemail">
          <ConfirmEmail/>
=======
        <Route path="/confirmEmail">
          <OrderConfirmEmail />
        </Route>
        <Route path="/recuperarsenha">
          <RecuperarSenha />
        </Route>
        <Route path="/redefinirsenha">
          <RedefinirSenha />
>>>>>>> 527f9d738fe29e5a8d964fb6fc2d1122860626eb
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
