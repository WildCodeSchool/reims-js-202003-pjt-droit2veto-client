import React from 'react';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './navbar.css';

import Test from './Test'

function NavBar() {
  return (
    <>
      <Router>
        <div className="navbarHorizontalBloc">
          <Link className="navbarTitle" to='/'>Droit2Veto</Link>
          <p>Profil en cours</p>
        </div>
        <div className="navbarPage">
          <nav className="navbarVerticaleBloc">
            <ul>
              <li>
                <Link to='/informations'>Mes informations</Link>
              </li>
              <li>
                <Link to='/anesthesia'>Plaquette anesthésie</Link>
              </li>
              <li>
                <Link to='/activities'>Plaquette d'activités</Link>
              </li>
              <li>
                <Link to='/order'>Ma commande</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path='/'>
              <Test />
            </Route>
            <Route exact path='/informations'>
              <Test />
            </Route>
            <Route excat path='/anesthesia'>
              <Test />
            </Route>
            <Route exact path='/activities'>
              <Test />
            </Route>
            <Route exact path='/order'>
              <Test />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default NavBar;
