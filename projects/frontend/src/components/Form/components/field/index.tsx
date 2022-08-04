import * as React from 'react';
import { get, pick } from 'lodash';
import inputs from '../inputs';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import { useSchema } from '../../hooks';

const useStyles = makeStyles(() => ({
  required: {
    color: 'red',
  },
  label: {
    display: 'block',
    fontWeight: 'bold',
  },
}));

export default function Field(props): React.ReactElement {
  const schema = useSchema();
  const classes = useStyles(props);
  const sizeProps = pick(props, ['xs', 'sm', 'md', 'lg', 'xl']);
  const inputProps = pick(props, [
    'autoComplete',
    'autoFocus',
    'children',
    'disabled',
    'helperText',
    'id',
    'multiline',
    'name',
    'options',
    'placeholder',
    'render',
    'required',
    'rows',
    'rows',
    'variant',
  ]);

  const required = get(schema, `fields.${props.name}._exclusive.required`);

  let Input;

  if (props.type) {
    Input = inputs[props.type];
    if (!Input) {
      throw new Error(`Unknown input type: ${props.type}`);
    }
  }

  return (
    <Grid
      item
      xs={sizeProps.xs}
      sm={sizeProps.sm}
      md={sizeProps.md}
      lg={sizeProps.lg}
      xl={sizeProps.xl}
    >
      {props.type && props.label && (
        <label htmlFor={'form_field_' + props.name} className={classes.label}>
          {props.label}{' '}
          {required && <span className={classes.required}>*</span>}
        </label>
      )}
      {props.type && <Input {...inputProps} required />}
    </Grid>
  );
}
