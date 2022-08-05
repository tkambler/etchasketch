import * as React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useLocation } from '@app/lib/hooks';
import { Whiteboards } from './Whiteboards/Whiteboards';
import { Login } from './Login/Login';
import { Create } from './Create/Create';
import { View } from './View/View';
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
      {loginState.user && <Route path="/create" component={Create} />}
      {loginState.user && (
        <Route path="/whiteboards/:whiteboardId" component={View} />
      )}
      {loginState.user && <Route path="/whiteboards" component={Whiteboards} />}
    </Switch>
  );
}
