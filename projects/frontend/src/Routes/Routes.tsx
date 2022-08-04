import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocation } from '@app/lib/hooks';
import { Admin } from './Admin/Admin';
import { Login } from './Login/Login';
import { Dashboard } from './Dashboard/Dashboard';
import { useLoginState } from '@app/components/Setup/Setup';

export function Routes(): React.ReactElement {
  const loginState = useLoginState();
  const location = useLocation();
  return (
    <Switch>
      {!loginState.user && location.pathname !== '/login' && (
        <Redirect to="/login" />
      )}
      {!loginState.user && <Route path="/login" component={Login} />}
      {loginState.user && <Route path="/dashboard" component={Dashboard} />}
    </Switch>
  );
}
