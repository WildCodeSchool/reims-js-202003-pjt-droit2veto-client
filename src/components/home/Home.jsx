import React from 'react';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import NavBar from '../navbar/NavBar';
import '../navbar/navbar.css';
import LoremIpsum from '../test/LoremIpsum';
import BlocTuto from '../blocTuto/BlocTuto';
import Information from '../information/Information';
import ActivityList from '../activity/ActivityList';

const Home = () => (
  <Router>
    <div className="navbarHorizontalBloc">
      <Link className="navbarTitle" to="/">Droit2Veto</Link>
      <p>Profil en cours</p>
    </div>
    <div className="navbarPage">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <BlocTuto />
        </Route>
        <Route exact path="/informations">
          <Information />
        </Route>
        <Route excat path="/anesthesia">
          <LoremIpsum />
        </Route>
        <Route exact path="/activities">
          <ActivityList />
        </Route>
        <Route exact path="/order">
          <LoremIpsum />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Home;
