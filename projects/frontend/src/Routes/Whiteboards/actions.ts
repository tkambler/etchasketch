import { axios } from '@app/axios';

export function init() {
  return async (dispatch, getState) => {
    const { data } = await axios({
      url: '/whiteboards',
    });
    dispatch({
      type: 'setWhiteboards',
      payload: {
        value: data,
      },
    });
  };
}
