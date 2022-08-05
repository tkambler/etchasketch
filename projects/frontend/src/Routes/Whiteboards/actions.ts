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

export function del(whiteboardId, toast) {
  return async (dispatch, getState) => {
    await axios({
      url: `/whiteboards/${whiteboardId}`,
      method: 'DELETE',
    });
    dispatch(init());
    toast.enqueue('Whiteboard deleted.', {
      variant: 'success',
    });
  };
}
