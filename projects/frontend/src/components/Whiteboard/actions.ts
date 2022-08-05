import { axios } from '@app/axios';

export function save(toast) {
  return async (dispatch, getState) => {
    const state = getState();
    const data = state.emitter.export();
    await axios({
      method: 'POST',
      url: '/whiteboards',
      data: {
        data,
      },
    });
    toast.enqueue('Whiteboard saved.', {
      variant: 'success',
    });
  };
}
