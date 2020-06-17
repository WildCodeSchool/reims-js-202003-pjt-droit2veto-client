import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './logPage.css';

const LogPage = () => {
  return (
    <div className="logPageContainer">
      <section className="logPageLeft">
        <h1 className="logPageTitle">Droit2Veto</h1>
        <div className="logPageTextDiv">
          <p className="logPageText1">Bienvenue sur Droit2Veto</p>
          <p className="logPageText2">L’application web qui vous permet de générer vos propres pdf</p>
        </div>
      </section>
      <section className="logPageRight">
        <h1 className="logPageText3">Créer votre compte </h1>
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
          <Link className="logPageFormButton" to="/">
            Me connecter
          </Link>
        </form>
      </section>
    </div>
  );
};

export default LogPage;
