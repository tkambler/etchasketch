import { axios } from '@app/axios';

export function save(toast) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const { data, svg, drawingTime } = state.emitter.export();
      await axios({
        method: 'POST',
        url: '/whiteboards',
        data: {
          data,
          svg,
          drawingTime,
        },
      });
      toast.enqueue('Whiteboard saved.', {
        variant: 'success',
      });
    } catch (err) {
      toast.enqueue('Failed to save image.', {
        variant: 'error',
      });
    }
  };
}
