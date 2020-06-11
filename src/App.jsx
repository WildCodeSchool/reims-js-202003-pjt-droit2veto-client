import React from 'react';
import './App.css';
import NavBar from './components/navbar/NavBar';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import LoremIpsum from './components/test/LoremIpsum';

function App() {
  return (
    <>
      <Router>
        <div className="navbarHorizontalBloc">
          <Link className="navbarTitle" to="/">Droit2Veto</Link>
          <p>Profil en cours</p>
        </div>
        <div className="navbarPage">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <LoremIpsum />
            </Route>
            <Route exact path="/informations">
              <LoremIpsum /> { /* Information */ }
            </Route>
            <Route excat path="/anesthesia">
              <LoremIpsum />
            </Route>
            <Route exact path="/activities">
              <LoremIpsum /> {/* ActivityList */}
            </Route>
            <Route exact path="/order">
              <LoremIpsum />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
