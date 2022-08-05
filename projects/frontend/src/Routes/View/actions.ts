import { axios } from '@app/axios';

export function init(whiteboardId) {
  return async (dispatch, getState) => {
    const { data } = await axios({
      url: `/whiteboards/${whiteboardId}`,
    });
    dispatch({
      type: 'setWhiteboard',
      payload: {
        value: data,
      },
    });
  };
}
