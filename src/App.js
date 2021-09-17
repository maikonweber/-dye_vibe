
import React from 'react';
import Header from '../src/components/header'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styles from './Home.module.css';
import Login from './pages/login';
import Home from './pages/home';

function App() {

  return (
    <div className={styles.container}>
      <Router>
        <Header />
        <Switch>
          <Route path='/home' component={Home} />
          <Route path='/login'component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
