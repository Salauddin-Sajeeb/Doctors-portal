
import './App.css';
import Home from './Home/Home';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Login from './Home/Login';
import AuthProvider from './Context/AuthProvider';
import Register from './Home/Login/Refister';
import Details from './Home/Products/ProductDetails/Details';
import Error from './Home/ErrorPage/Error';
import PrivateRoute from './Home/Login/Private Route/PrivateRoute';
import Purchase from './Home/Feedback/Purchase';
import Feedback from './Home/Feedback/Feedback';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/products/:pd">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/purchase">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/feedback">
              <Feedback></Feedback>
            </PrivateRoute>
            <Route path="*">
              <Error></Error>

            </Route>
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
