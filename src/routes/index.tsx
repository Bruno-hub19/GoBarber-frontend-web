import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import SignIn from '../pages/SignIn';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import { ForgotPassword } from '../pages/ForgotPassword';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/register" component={Register} />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/forgot-password" component={ForgotPassword} />
  </Switch>
);

export default Routes;
