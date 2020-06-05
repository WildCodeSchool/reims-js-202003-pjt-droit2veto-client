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

import LoremIpsum from './components/navbar/LoremIpsum';

function App() {
  return (
    <>
      <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
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
      </Router>
    </>
  );
}

export default App;
