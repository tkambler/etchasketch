import * as React from 'react';
import * as actions from './actions';
import { axios } from '@app/axios';
import { useLoginState, useToast } from '@app/components/Setup/Setup';

export function useLogin() {
  const state = useLoginState();
  const toast = useToast();
  return React.useCallback(
    (username: string, password: string) => {
      state.dispatch(actions.login(username, password, toast));
    },
    [state, toast]
  );
}

export function useState() {
  return React.useReducer(
    (state, action) => {
      switch (action.type) {
        case 'setUsername':
          return {
            ...state,
            username: action.payload.value,
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
    }
  );
}

export function useActions() {
  const toast = useToast();
  const state = useLoginState();

  return React.useMemo(
    () => ({
      login: (username: string, password: string, toast) => {
        return async (dispatch, getState) => {
          try {
            const res = await axios({
              method: 'POST',
              url: '/session',
              data: {
                username,
                password,
              },
            });
            toast.enqueue(`Welcome back, ${res.data.first_name}.`, {
              variant: 'success',
            });
            return dispatch({
              type: 'setUser',
              payload: {
                value: res.data,
              },
            });
          } catch (err) {
            toast.enqueue('Login failed.', {
              variant: 'error',
            });
          }
        };
      },
    }),
    [toast, state]
  );
}
