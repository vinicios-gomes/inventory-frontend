import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import Dashboard from '../pages/Dashboard';
import Equipamentos from '../pages/Equipamentos';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={SignIn} />
    <Route path="/dashboard" component={Dashboard} isPrivate />

    <Route path="/equipamentos" component={Equipamentos} isPrivate />
  </Switch>
);

export default Routes;
