import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Admin } from './Admin/Admin';
import { Login } from './Login/Login';
import { Dashboard } from './Dashboard/Dashboard';

export function Routes(): React.ReactElement {
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/admin" component={Admin} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
