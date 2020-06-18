import React from 'react';
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import './navbar.css';
import profil from '../../icon/profil.png';
import seringue from '../../icon/seringue.png';
import maison from '../../icon/maison.png';
import fiche from '../../icon/fiche.png';
import woof from '../../icon/woof.png';

function NavBar() {
  return (
    <>
      <nav className="navbarVerticaleBloc">
        <ul>
          <li>
            <img src={profil} alt="" />
            <Link className="navbarLink" to="/informations">Mes informations</Link>
          </li>
          <li>
            <img src={seringue} alt="" />
            <Link className="navbarLink" to="/anesthesia">Plaquette anesthésie</Link>
          </li>
          <li>
            <img src={maison} alt="" />
            <Link className="navbarLink" to="/activities">Plaquette d'activités</Link>
          </li>
          <li>
            <img src={fiche} alt="" />
            <Link className="navbarLink" to="/order">Ma commande</Link>
          </li>
          <li>
            <img id="navbarDogCat" src={woof} alt="" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default NavBar;
