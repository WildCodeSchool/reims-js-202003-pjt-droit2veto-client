import React from 'react';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import NavBar from './NavBar';
import LoremIpsum from './LoremIpsum';
import './navbar.css';

const Home = () => (
  <Router>
    <div className="navbarHorizontalBloc">
      <Link className="navbarTitle" to="/">Droit2Veto</Link>
      <p>Profil en cours</p>
    </div>
    <div className="navbarPage">
      <NavBar />
      <Switch>
        <Route exact path="/home">
          <LoremIpsum />
        </Route>
        <Route exact path="/informations">
          <LoremIpsum />
        </Route>
        <Route excat path="/anesthesia">
          <LoremIpsum />
        </Route>
        <Route exact path="/activities">
          <LoremIpsum />
        </Route>
        <Route exact path="/order">
          <LoremIpsum />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Home;
