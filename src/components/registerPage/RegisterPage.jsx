
import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import '../logPage/logPage.css';
import Axios from 'axios';


const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ordinalNumber, setOrdinalNumber] = useState('');

  function post() {
    Axios.post('http://localhost:8000/users', {
      email : email, password : password, ordinal_number: ordinalNumber,
    })
      .then(
        (res) =>alert("enregistrement reussi"),
      )
      .catch(
        (err) => alert("bad request"),
      );
  }
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
        <form onSubmit={(event) => {
          post();
          event.preventDefault();
        }}
        >
          <div className="logPageFormInputDiv">
            <label htmlFor="email">Adresse mail</label>
            <input className="logPageFormInput" type="email" name="mail" id="email" placeholder="jean.dupont@gmail.com" onChange={(event) => setEmail(event.target.value)} required />
          </div>
          <div className="logPageFormInputDiv">
            <label htmlFor="password">Mot de passe</label>
            <input className="logPageFormInput" type="password" name="password" id="password" placeholder="secret1234" onChange={(event) => setPassword(event.target.value)} required />
          </div>
          <div className="logPageFormInputDiv">
            <label htmlFor="ordinal_number">Numero Ordinal</label>
            <input className="logPageFormInput" type="text" name="ordinal_number" id="ordinal_number" placeholder="548934" maxlength = '6' minLength='6' onChange={(event) => setOrdinalNumber(event.target.value)} required />
          </div>
          <p className="logPageFormText">Déjà membre ? Connectez-vous <Link to="/login" className="logPageLink">ici</Link></p>
          <div className="logPageFormButtonDiv">
            <button type="submit" className="logPageFormButton">S'inscrire</button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default RegisterPage;
