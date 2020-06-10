import React from 'react';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './navbar.css';

function NavBar() {
  return (
    <>
      <nav className="navbarVerticaleBloc">
        <ul>
          <li>
            <Link to="/informations">Mes informations</Link>
          </li>
          <li>
            <Link to="/anesthesia">Plaquette anesthésie</Link>
          </li>
          <li>
            <Link to="/activities">Plaquette d'activités</Link>
          </li>
          <li>
            <Link to="/order">Ma commande</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
