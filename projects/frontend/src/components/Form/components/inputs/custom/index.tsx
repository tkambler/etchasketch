import * as React from 'react';
import Context from '../../../context';

export default function CustomInput(props) {
  const form = React.useContext(Context);
  return props.children(form);
}
