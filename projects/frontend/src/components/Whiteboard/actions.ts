import { axios } from '@app/axios';

export function save(toast) {
  return async (dispatch, getState) => {
    const state = getState();
    const data = state.emitter.export();
    const svg = state.emitter.exportSVG();
    await axios({
      method: 'POST',
      url: '/whiteboards',
      data: {
        data,
        svg,
      },
    });
    toast.enqueue('Whiteboard saved.', {
      variant: 'success',
    });
  };
}
