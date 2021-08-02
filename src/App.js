
import React from 'react';
import Header from './components/Header/header'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  GlobalStyle  from './styles/global';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
      <GlobalStyle />
          <Route path='/' />
      </Switch>
      <Header />
      </Router>
    </div>
  );
}

export default App;
