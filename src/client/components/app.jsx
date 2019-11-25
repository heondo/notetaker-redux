import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './homepage';
import AppDrawer from './app-drawer';

export default function App(props) {
  return (
    <Router>
      <AppDrawer {...props}/>
      <Switch>
        <Route exact path="/" render={props => <HomePage {...props}/>}/>
      </Switch>
    </Router>
  );
}
