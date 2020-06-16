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
          <li className="NavLink">
            <Link to="/informations" className="LinkLeft">Mes informations</Link>
          </li>
          <li className="NavLink">
            <Link to="/anesthesia" className="LinkLeft">Plaquette anesthésie</Link>
          </li>
          <li className="NavLink">
            <Link to="/activities" className="LinkLeft">Plaquette d'activités</Link>
          </li>
          <li className="NavLink">
            <Link to="/order" className="LinkLeft">Ma commande</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
