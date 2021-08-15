
import React from 'react';
import Header from './components/Header/header'
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import  GlobalStyle  from './styles/global';
import Container from './components/Container/container'
import ProductCard from './components/productsCard/productCard';

const descript = "Esta é descriçao de um item por favor se você estiver lendo isso vai tomar no cu"
 

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
      <GlobalStyle />
          <Route path='/' />
      </Switch>
      <Header /> 
        <ProductCard  />
      </Router>
    </div>
  );
}

export default App;
