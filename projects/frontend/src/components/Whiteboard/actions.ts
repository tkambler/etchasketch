import { axios } from '@app/axios';

/**
 * Save the drawing. Currently, this cannot be undone. Once you save - you're done making changes.
 */
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

/**
 * Re-watch the steps by which the drawing was originally created.
 */
export function replay() {
  return async (dispatch, getState) => {
    const state = getState();
    state.emitter.reset();
    state.emitter.events = state.whiteboard.data;
    dispatch({
      type: 'setPlaying',
      payload: {
        value: true,
      },
    });
    await state.emitter.replay();
    dispatch({
      type: 'setPlaying',
      payload: {
        value: false,
      },
    });
  };
}
