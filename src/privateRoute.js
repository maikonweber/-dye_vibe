import {BrowserRouter as  Route, Redirect} from 'react-router-dom';
import React from 'react';
import  isAuthenticated  from './auth';

export default function PrivateRoute ({ component: Component, ...rest }) {

  <Route {...rest} render={props => 
    isAuthenticated() ? 
    (<Component {...props} /> ) : 
    (<Redirect to={{ pathname: '/', state: {from: props.location} }} />)
    
  } 
    />
}


