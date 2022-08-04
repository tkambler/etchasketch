import * as React from 'react';
import * as yup from 'yup';

export const schema = yup.object().shape({
  budget: yup.string().required().label('Budget'),
  type: yup.string().required().label('Trip Type'),
});

export function useFormOptions() {
  return React.useMemo(() => {
    return {
      id: 'input',
      schema,
      values: {
        budget: '',
        type: '',
      },
      onSubmit: (data) => {
        console.log('onSubmit', data);
      },
    };
  }, []);
}
