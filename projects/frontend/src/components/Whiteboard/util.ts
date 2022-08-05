/**
 * Given a canvas element and a mouse movement event (attached to the canvas),
 * this function will return the position of the mouse (relative to the canvas)
 * at the time the event was emitted.
 */
export function getMousePosition(canvas, e) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: e.clientX - rect.left,
    y: e.clientY - rect.top,
  };
}
