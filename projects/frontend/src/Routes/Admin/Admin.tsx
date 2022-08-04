import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useRouteMatch } from '@app/lib/hooks';
import { Location } from './Location/Location';

export function Admin(): React.ReactElement {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={`${match.path}/location`} component={Location} />
    </Switch>
  );
}
