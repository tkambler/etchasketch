import * as React from 'react';
import Grid from '@mui/material/Grid';
import { WhiteboardCard } from './WhiteboardCard';
import CircularProgress from '@mui/material/CircularProgress';
import { compose } from 'lodash/fp';
import { useHistory } from '@app/lib/hooks';
import { useState, withState } from './State';
import * as actions from './actions';
import Button from '@mui/material/Button';

function Whiteboards(): React.ReactElement {
  const state = useState();
  const history = useHistory();

  React.useEffect(() => {
    state.dispatch(actions.init());
  }, []);
  if (!state.whiteboards) {
    return <CircularProgress />;
  }
  return (
    <React.Fragment>
      <Button
        style={{
          margin: '10px 10px 25px 10px',
        }}
        variant="contained"
        disableElevation
        onClick={() => {
          history.push('/create');
        }}
      >
        Create New Whiteboard
      </Button>
      <Grid container spacing={1}>
        {state.whiteboards.map((whiteboard) => (
          <Grid key={whiteboard.id} item xs={2}>
            <WhiteboardCard whiteboard={whiteboard} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}

const Composed = compose(withState)(Whiteboards);
export { Composed as Whiteboards };
