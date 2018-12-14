import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateProfile from './components/container/CreateProfile'
import EditProfile from './components/container/EditProfile'
import ViewAllProfile from './components/container/ViewAllProfile'
import ViewProfile from './components/container/ViewProfile'
const App = () => (
  <Switch>
    <Route exact path="/" component={ViewAllProfile} />
    <Route exact path="/create-profile" component={CreateProfile} />
    <Route exact path="/edit-profile/:id" component={EditProfile} />
    <Route exact path="/view-profile/:id" component={ViewProfile} />
  </Switch>
);

export default (
  App
); 