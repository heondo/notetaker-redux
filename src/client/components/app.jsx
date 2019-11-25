import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from '../containers/homepage';
import AppDrawer from '../containers/app-drawer';
import NewNote from './new-note';

export default function App(props) {
  return (
    <Router>
      <AppDrawer {...props}/>
      <Switch>
        <Route exact path="/" render={props => <HomePage {...props}/>}/>
        <Route path="/new" render={props => <NewNote {...props}/>}/>
      </Switch>
    </Router>
  );
}
