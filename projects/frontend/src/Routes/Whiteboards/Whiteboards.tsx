import * as React from 'react';
import Grid from '@mui/material/Grid';
import { WhiteboardCard } from './WhiteboardCard';
import CircularProgress from '@mui/material/CircularProgress';
import { compose } from 'lodash/fp';
import { useState, withState } from './State';
import * as actions from './actions';

function Whiteboards(): React.ReactElement {
  const state = useState();

  React.useEffect(() => {
    state.dispatch(actions.init());
  }, []);
  if (!state.whiteboards) {
    return <CircularProgress />;
  }
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {state.whiteboards.map((whiteboard) => (
          <Grid key={whiteboard.id} item xs={3}>
            <WhiteboardCard whiteboard={whiteboard} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

const Composed = compose(withState)(Whiteboards);
export { Composed as Whiteboards };
