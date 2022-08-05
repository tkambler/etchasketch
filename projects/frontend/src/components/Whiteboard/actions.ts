import { axios } from '@app/axios';

export function save(toast, history) {
  return async (dispatch, getState) => {
    try {
      const state = getState();
      const { data, svg, drawingTime } = state.emitter.export();
      const { data: whiteboard } = await axios({
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
      history.push(`/whiteboards/${whiteboard.id}`);
    } catch (err) {
      toast.enqueue('Failed to save image.', {
        variant: 'error',
      });
    }
  };
}
