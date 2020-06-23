import React from 'react';
import './App.css';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import LogPage from './components/logPage/LogPage';
import Home from './components/home/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/login">
            <LogPage />
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
