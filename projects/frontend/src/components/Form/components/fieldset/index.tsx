import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  container: (props) => ({
    marginBottom: (props as any).variant === 'noGutter' ? 0 : theme.spacing(1),
  }),
}));

export default function Fieldset(props) {
  const classes = useStyles(props);
  return (
    <Grid
      container
      spacing={props.spacing}
      className={classes.container}
      style={{
        ...(props.style || {}),
      }}
    >
      {props.heading && (
        <Grid item xs={12}>
          <Typography
            variant="h5"
            style={{
              borderBottom: '1px solid #000',
            }}
          >
            {props.heading}
          </Typography>
        </Grid>
      )}
      {props.children}
    </Grid>
  );
}

Fieldset.defaultProps = {
  layout: false,
  spacing: 2,
};
