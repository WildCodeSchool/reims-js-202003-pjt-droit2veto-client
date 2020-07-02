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
import BlocTuto from '../bloctuto/BlocTuto';
import Information from '../information/Information';
import ActivityList from '../activity/ActivityList';
import ProfilBar from '../profilbar/ProfilBar';
import './home.css';


const Home = () => (
  <Router>
    <div className="navbarPage">
      <div>
        <NavBar />
      </div>
      <div className="appComponentsRouter">
        <ProfilBar />
        <Switch>
          <Route exact path="/">
            <BlocTuto />
          </Route>
          <Route exact path="/informations">
            <Information />
          </Route>
          <Route exact path="/anesthesia">
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
    </div>
  </Router>
);

export default Home;
