import * as React from 'react';
import { FieldArray, Formik, useFormikContext } from 'formik';
import * as components from './components';
import Context from './context';
import { debounce, noop } from 'lodash';
import { SchemaContext } from './SchemaContext';
import { useFormContext } from '@app/components/Setup/Setup';
import { defer } from 'lodash';

function useOnChangeCallback(onChange) {
  return React.useMemo(() => {
    return debounce(onChange, 100);
  }, [onChange]);
}

function Effect({ onChange }) {
  const formik = useFormikContext();
  const data = React.useMemo(
    () => ({
      values: formik.values,
      isValid: formik.isValid,
      errors: formik.errors,
      dirty: formik.dirty,
      status: formik.status,
    }),
    [formik.values, formik.isValid, formik.errors, formik.dirty, formik.status]
  );
  const [values, setValues] = React.useState(data.values);
  const onChangeCallback = useOnChangeCallback(onChange);

  React.useEffect(() => {
    onChangeCallback.cancel();
    onChangeCallback(values, data.values, formik);
    setValues(data.values);
  }, [data]);

  return null;
}

export function Form(props): React.ReactElement {
  const formContext = useFormContext();
  const onSubmit = React.useMemo(() => {
    if (!props.onSubmit) {
      return;
    }
    return (...args) => {
      defer(() => {
        props.onSubmit(...args);
      });
    };
  }, [
    props.onSubmit
  ]);
  return (
    <SchemaContext.Provider value={props.schema}>
      <Formik
        initialValues={props.values}
        validateOnMount={true}
        onSubmit={onSubmit}
        onChange={props.onChange}
        validationSchema={props.schema}
      >
        {(form) => {
          React.useEffect(() => {
            if (props.id) {
              formContext[props.id] = form;
              return () => {
                delete formContext[props.id];
              }
            }
          }, []);
          const onChange = React.useMemo(() => {
            return (currState, nextState, form) => {
              (props.onChange || noop)(currState, nextState, form);
            };
          }, []);

          return (
            <React.Fragment>
              <Effect onChange={onChange} />
              <Context.Provider value={form}>
                <form onSubmit={form.handleSubmit} style={props.style}>
                  {React.Children.map(props.children, (child, idx) => {
                    if (!child) {
                      return null;
                    }
                    return React.cloneElement(child, {
                      index: idx,
                    });
                  })}
                </form>
              </Context.Provider>
            </React.Fragment>
          );
        }}
      </Formik>
    </SchemaContext.Provider>
  );
}

Form.Fieldset = components.Fieldset;
Form.Field = components.Field;
Form.FieldArray = FieldArray;
