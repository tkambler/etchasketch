import * as React from 'react';
import * as actions from './actions';
import { useToast } from '@app/components/Setup/Setup';
import { useHistory } from '@app/lib/hooks';
import useReducerX from '@0y0/use-reducer-x';
import thunkMiddleware from 'redux-thunk';

export function useSubmit(state, dispatch) {
  const toast = useToast();
  const history = useHistory();
  return React.useCallback(async () => {
    await dispatch(actions.submit(toast));
    history.push('/login');
  }, [state, toast]);
}

export function useState() {
  return useReducerX(
    (state, action) => {
      switch (action.type) {
        case 'setUsername':
          return {
            ...state,
            username: action.payload.value,
          };
        case 'setEmail':
          return {
            ...state,
            email: action.payload.value,
          };
        case 'setFirstName':
          return {
            ...state,
            first_name: action.payload.value,
          };
        case 'setLastName':
          return {
            ...state,
            last_name: action.payload.value,
          };
        case 'setPassword':
          return {
            ...state,
            password: action.payload.value,
          };
        default:
          throw new Error();
      }
    },
    {
      username: '',
      password: '',
      first_name: '',
      last_name: '',
      email: '',
    },
    [thunkMiddleware]
  );
}
