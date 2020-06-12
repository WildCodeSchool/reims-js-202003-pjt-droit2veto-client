import React from 'react';
import './blocTuto.css';
import { Link } from 'react-router-dom';

function BlocTuto() {
  return (

    <div className="choixPage">

      <div className="flexButtonLigne1">

        <div className="ButtonLink">
          <Link to="/informations" className="tutoButton">Mes informations</Link>
          <p className="paraButton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates officia esse neque ex asperiores?</p>
        </div>

        <div className="ButtonLink">
          <Link to="/activities" className="tutoButton"> Mes activités </Link>
          <p className="paraButton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates officia esse neque ex asperiores?</p>
        </div>

      </div>

      <div className="flexButtonLigne2">

        <div className="ButtonLink">
          <Link to="/anesthesia" className="tutoButton"> Plaquette d'anesthésie </Link>
          <p className="paraButton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates officia esse neque ex asperiores?</p>
        </div>
        <div className="ButtonLink">
          <Link to="/order" className="tutoButton"> Ma commande </Link>
          <p className="paraButton">Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptates officia esse neque ex asperiores?</p>
        </div>

      </div>

    </div>

  );
}

export default BlocTuto;
