import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { SideMenu } from './SideMenu';
import { Canvas } from './Canvas';
import { compose } from 'lodash/fp';
import { withState } from './State';

function Whiteboard(): React.ReactElement {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SideMenu />
        </Grid>
        <Grid item xs={9}>
          <Canvas width={1500} height={800} />
        </Grid>
      </Grid>
    </Box>
  );
}

const Composed = compose(withState)(Whiteboard);
export { Composed as Whiteboard };
