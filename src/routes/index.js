import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Dashboard from '../pages/Dashboard';
import CurrentENVs from '../components/CurrentENVs';
import Navigation from '../components/Navigation';
import { app } from './styles.scss';

const Routes = () => (
  <div className={app}>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route render={() => <h1>PAGE NOT FOUND 404</h1>} />
    </Switch>
    <CurrentENVs />
  </div>
);

export default Routes;
