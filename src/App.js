
import React from 'react';
import Header from '../src/components/header'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './Home.module.css';
import Home from './pages/home';

function App() {

  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Switch>
          <Route path='/' />
          <Home />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
