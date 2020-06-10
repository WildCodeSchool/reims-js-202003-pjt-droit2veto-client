import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './logPage.css';

const LogPage = () => {
  return (
    <div className="logPageContainer">
      <section className="logPageLeft">
        <h1 className="logPageTitle">Droit2Veto</h1>
        <div className="logPageTextDiv">
          <p className="logPageText1">Lorem ipsum dolor sit amet</p>
          <p className="logPageText2">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </section>
      <section className="logPageRight">
        <h1 className="logPageText1">Créer votre compte </h1>
        <form>
          <div className="logPageFormInputDiv">
            <label htmlFor="email" />
            <input className="logPageFormInput" type="email" name="mail" id="email" placeholder="Adresse mail" required />
          </div>
          <div className="logPageFormInputDiv">
            <label htmlFor="name" />
            <input className="logPageFormInput" type="text" name="name" id="name" placeholder="Nom" required />
          </div>
          <div className="logPageFormInputDiv">
            <label htmlFor="ordinal_number" />
            <input className="logPageFormInput" type="text" name="ordinal_number" id="ordinal_number" placeholder="Numéro ordinal" required />
          </div>
          <p className="logPageFormText">Déjà membre ? Connectez-vous ici</p>
          <Link className="logPageFormButton" to="/home">
            Me connecter
          </Link>
        </form>
      </section>
    </div>
  );
};

export default LogPage;
