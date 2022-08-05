/**
 * Loads the top application bar for all authenticated routes.
 */
import * as React from 'react';
import { TopBar } from '@app/components/TopBar/TopBar';
import { useLoginState } from './State';

export function withNav(Component): React.ReactElement {
  return (props) => {
    const state = useLoginState();
    return (
      <React.Fragment>
        {state.user && <TopBar />}
        <div
          style={{
            padding: 10,
          }}
        >
          <Component {...props} />
        </div>
      </React.Fragment>
    );
  };
}
