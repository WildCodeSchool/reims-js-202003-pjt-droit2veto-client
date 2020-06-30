import React from 'react';
import './App.css';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import RegisterPage from './components/registerPage/RegisterPage';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/register">
            <RegisterPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
