import * as React from 'react';
import Context from '../../../context';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { get } from 'lodash';
import { useFieldAttributes } from '../../../hooks';

const useStyles = makeStyles((theme) => ({
  input: {
    width: '100%',
  },
  helperText: {
    fontSize: '1em',
  },
}));

export default function TextInput(props) {
  const form: any = React.useContext(Context);
  const classes = useStyles('default');
  const value = get(form.values, props.name);
  const { showError, helperText } = useFieldAttributes(
    props.name,
    props.required,
    props.helperText
  );

  return (
    <TextField
      error={showError}
      autoFocus={props.autoFocus}
      autoComplete={props.autoComplete}
      name={props.name}
      id={'form_field_' + props.name}
      value={value}
      onChange={form.handleChange}
      onBlur={form.handleBlur}
      placeholder={props.placeholder}
      className={classes.input}
      helperText={helperText}
      FormHelperTextProps={{
        className: classes.helperText,
      }}
      disabled={props.disabled || form.isSubmitting}
      InputProps={{
        readOnly: form.isSubmitting,
      }}
      type="text"
      variant={props.variant || 'standard'}
    />
  );
}
