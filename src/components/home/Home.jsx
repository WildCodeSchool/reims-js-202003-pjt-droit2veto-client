import React, { Component, useEffect, useState } from 'react';
import {
  BrowserRouter as
    Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import { connect } from 'react-redux';
import NavBar from '../navbar/NavBar';
import '../navbar/navbar.css';
import LoremIpsum from '../test/LoremIpsum';
import BlocTuto from '../bloctuto/BlocTuto';
import Information from '../information/Information';
import ActivityList from '../activity/ActivityList';
import ProfilBar from '../profilbar/ProfilBar';
// import LogOut from './LogOut';
import './home.css';


const mapStateToProps = (state) => ({
  token: state.token,
});



const Home = ({ token, dispatch, history }) => {

  useEffect(() => {
    if (token === null) {
      history.push('/register');
    }
  });

  return (
    <Router>
      <div className="navbarHorizontalBloc">
        <Link className="navbarTitle" to="/">Droit2Veto</Link>
        <p>Profil en cours</p>
      </div>
      <div className="navbarPage">
        <div>
          <NavBar />
        </div>
        <div className="appComponentsRouter">
          <Switch>
            <Route exact path="/">
              <BlocTuto />
            </Route>
            <Route exact path="/informations">
              <Information />
            </Route>
            <Route exact path="/anesthesia">
              <LoremIpsum />
            </Route>
            <Route exact path="/activities">
              <ActivityList />
            </Route>
            <Route exact path="/order">
              <LoremIpsum />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default connect(mapStateToProps)(Home);
