
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import  PrivateRoute  from './privateRoute';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from './styles/theme'
import { login } from './pages/login';
import  { Header }  from './components/header';
import { Home } from './pages/home';  
import { Formspage }   from  './pages/adminPage'
import { AuthProvider } from './context/AuthContext';
import { Cheackout } from './pages/cheackout';


export default function App() {

  return ( 
    <>
    <AuthProvider >
      <ChakraProvider theme={theme} >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/login" component={login}  />
          <Route exact path="/forms" component={Formspage} />
          <Route exact path="/" component={Home}  />
          <Route exact path='/cheackout' component={Cheackout}/>
        </Switch>
      </Router>
      </ChakraProvider >
      </AuthProvider>
    </>
  )

}

