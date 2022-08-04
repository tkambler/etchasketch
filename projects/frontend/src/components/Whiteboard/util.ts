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

export function degToRad(degrees) {
  return (degrees * Math.PI) / 180;
}

export const colorMap = {
  black: 'rgb(0, 0, 0)',
  blue: 'rgb(11, 0, 255)',
  green: 'rgb(7, 255, 0)',
  orange: 'rgb(255, 148, 0)',
  red: 'rgb(255, 0, 0)',
};
