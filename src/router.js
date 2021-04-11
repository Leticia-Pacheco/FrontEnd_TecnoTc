import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
// import ConfirmEmail from './pages/ConfirmEmail';
// import OrderConfirmEmail from './pages/OrderConfirmEmail';

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
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
