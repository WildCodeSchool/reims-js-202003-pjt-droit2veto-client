import React, { useState } from 'react';
import {
  BrowserRouter as Router, Route, Switch, Link,
} from 'react-router-dom';
import './logPage.css';
import Axios from 'axios';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  token: state.token,
});


const LogPage = ({ dispatch, history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function post() {
    Axios.post('http://localhost:8000/auth/login', {
      email, password,
    })
      .then(
        (res) => {
          dispatch({
            type: 'SETTOKEN',
            newToken: res.data.token,
            newId: res.data.user.id,
            newadmin: res.data.user.admin,
          });
          history.push('/');
        })
      .catch(
        (err) => alert('bad request'),
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
        <h1 className="logPageText3">Connectez-vous </h1>
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
          <p className="logPageFormText">
            Pas encore inscrit ? Enregistrez vous
            {' '}
            <Link to="/register" className="logPageLink">
              ici
            </Link>
          </p>
          <div className="logPageFormButtonDiv">
            <button className="logPageFormButton" >
              Me connecter
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default connect(mapStateToProps)(LogPage);
