import * as React from 'react';
import Context from '../../../context';
import { makeStyles } from '@mui/styles';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormHelperText from '@mui/material/FormHelperText';
import { get } from 'lodash';
import { useFieldAttributes } from '../../../hooks';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
  },
  selectEmpty: {},
  input: {
    width: '100%',
  },
  helperText: {
    fontSize: '1em',
  },
}));

export default function SelectInput(props) {
  const form: any = React.useContext(Context);
  const styles = useStyles('default');
  const value = get(form.values, props.name);
  const { showError, helperText } = useFieldAttributes(
    props.name,
    props.required,
    props.helperText
  );

  return (
    <React.Fragment>
      <Select
        error={showError}
        autoFocus={props.autoFocus}
        autoComplete={props.autoComplete}
        displayEmpty={true}
        name={props.name}
        className={styles.input}
        value={value}
        placeholder={props.placeholder}
        disabled={props.disabled || form.isSubmitting}
        inputProps={{
          name: props.name,
          id: 'form_field_' + props.name,
          value,
          onChange: form.handleChange,
          onBlur: form.handleBlur,
        }}
        variant={props.variant || 'standard'}
      >
        <MenuItem value="">-- Select One --</MenuItem>
        {props.options.map((option, idx) => (
          <MenuItem key={option.label + idx} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
      {helperText && (
        <FormHelperText className={styles.helperText}>
          {helperText}
        </FormHelperText>
      )}
    </React.Fragment>
  );
}
