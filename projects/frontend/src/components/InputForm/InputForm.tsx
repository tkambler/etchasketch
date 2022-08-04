import * as React from 'react';
import Button from '@mui/material/Button';
import { Form } from '@app/components/Form/Form';
import { isEmpty } from 'lodash';
import * as hooks from './hooks';
import * as util from './util';

export function InputForm(): React.ReactElement {
  const formOptions = hooks.useFormOptions();

  return (
    <div
      style={{
        width: 700,
      }}
    >
      <Form {...formOptions}>
        <Form.Fieldset heading="Create Trip">
          <Form.Field
            xs={12}
            name="type"
            type="select"
            label="Trip Type"
            options={util.tripTypes}
          />
          <Form.Field
            xs={12}
            name="budget"
            type="select"
            label="Budget"
            autoFocus={true}
            options={util.options}
          />
          <Form.Field xs={12} type="custom">
            {(form) => {
              const { errors, isSubmitting, submitForm } = form;
              return (
                <div>
                  <Button
                    disableElevation
                    variant="contained"
                    color="primary"
                    disabled={isSubmitting || !isEmpty(errors)}
                    onClick={submitForm}
                  >
                    Submit
                  </Button>
                </div>
              );
            }}
          </Form.Field>
        </Form.Fieldset>
      </Form>
    </div>
  );
}
