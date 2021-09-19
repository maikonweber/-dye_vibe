
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  PrivateRoute  from './privateRoute';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme'
import { Home } from './pages/Home';
import  { Header }  from './components/header';


export default function App() {

  return ( 
    <>
      <ChakraProvider theme={theme} >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home}  />
        </Switch>
      </Router>
      </ChakraProvider >
    </>
  )

}

