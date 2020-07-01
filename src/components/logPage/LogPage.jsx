import React from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import './logPage.css';

const LogPage = () => (
  <div className="logPageContainer">
    <section className="logPageLeft">
      <h1 className="logPageTitle">Droit2Veto</h1>
      <div className="logPageTextDiv">
        <p className="logPageText1">Bienvenue sur Droit2Veto</p>
        <p className="logPageText2">L’application web qui vous permet de générer vos propres pdf</p>
      </div>
    </section>
    <section className="logPageRight">
      <h1 className="logPageText3">Connectez-vous </h1>
      <form>
        <div className="logPageFormInputDiv">
          <label htmlFor="email" />
          <input className="logPageFormInput" type="email" name="mail" id="email" placeholder="Adresse mail" required />
        </div>
        <div className="logPageFormInputDiv">
          <label htmlFor="password" />
          <input className="logPageFormInput" type="text" name="password" id="password" placeholder="Mot de passe" required />
        </div>
        <p className="logPageFormText">
          Pas encore inscrit ? Enregistrez vous
          {' '}
          <Link className="logPageLink" to="/register">
            ici
          </Link>
        </p>
        <Link className="logPageFormButton" to="/">
          Me connecter
        </Link>
      </form>
    </section>
  </div>
);

export default LogPage;
