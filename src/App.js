
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Component/Home/Home';
import Register from './Component/Login/Register';
import Login from './Component/Login/Login';
import Navigation from './Component/Home/Navigation';
import Details from './Component/Home/Details';
import AuthProvider from './Component/Login/AuthProvider';
import Deshbord from './Component/Home/Deshbord';
import Appointement from './Component/Home/Appointement';
import Edit from './Component/Home/Edit';
import Pay from './Component/Home/Pay';
import Footer from './Component/Home/Footer';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>

          <Navigation></Navigation>
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/appointement">
              <Appointement />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/deshbord">
              <Deshbord />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/single/deatils/:id">
              <Details />
            </Route>
            <Route exact path="/edit/deatils/:id">
              <Edit />
            </Route>
            <Route exact path="/pay/:id">
              <Pay />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
