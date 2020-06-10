import React from 'react';
import {
  BrowserRouter as
  Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import LogPage from './components/logPage/LogPage';
import Home from './components/navbar/Home';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <LogPage />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
