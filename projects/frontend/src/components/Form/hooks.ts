import * as React from 'react';
import { get } from 'lodash';
import Context from './context';
import { SchemaContext } from './SchemaContext';

export function useFieldAttributes(name, required, helperText) {
  const form = React.useContext(Context);
  const meta = form.getFieldMeta(name);

  const touched = React.useMemo(() => {
    return form.touched[name];
  }, [form.touched]);

  const errors = React.useMemo(() => {
    const res = get(form.errors, name);
    if (!res) {
      return [];
    }
    return Array.isArray(res) ? res : [res];
  }, [form.errors]);

  const showError = React.useMemo(() => {
    return form.submitCount > 0 && (meta.error ? true : false);
  }, [form.submitCount, meta]);

  const _helperText = React.useMemo(() => {
    if (showError) {
      return meta.error;
    } else {
      return helperText;
    }
  }, [showError, meta, helperText]);

  return {
    helperText: _helperText,
    showError,
  };
}

export function useSchema() {
  return React.useContext(SchemaContext);
}
