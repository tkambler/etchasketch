import { axios } from '@app/axios';

export function submit(toast) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const res = await axios({
        method: 'POST',
        url: '/accounts',
        data: {
          first_name: state.first_name,
          last_name: state.last_name,
          email: state.email,
          username: state.username,
          password: state.password,
        },
      });
      toast.enqueue('Account created', {
        variant: 'success',
      });
      return res.data;
    } catch (err) {
      toast.enqueue('Account creation failed.', {
        variant: 'error',
      });
    }
  };
}
