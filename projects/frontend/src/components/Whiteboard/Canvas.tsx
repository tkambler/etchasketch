import * as React from 'react';
import * as hooks from './hooks';

export function Canvas(props: {
  width: number;
  height: number;
}): React.ReactElement {
  const [canvas, setCanvas] = hooks.useCanvasElement();
  const canvasRef = hooks.useCanvasRef(setCanvas);
  const { canvasEmitter } = hooks.useCanvasInitializer(canvas);

  return (
    <div
      id="whiteboard"
      style={{
        width: props.width,
        height: props.height,
        border: '5px solid #000',
        boxSizing: 'content-box',
        backgroundColor: '#fff',
      }}
    >
      <canvas
        width={props.width - 5}
        height={props.height - 5}
        id="whiteboard-canvas"
        ref={canvasRef}
        style={{
          width: props.width - 5,
          height: props.height - 5,
        }}
      ></canvas>
    </div>
  );
}
