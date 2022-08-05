import { axios } from '@app/axios';

export function login(username: string, password: string, toast) {
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
}
