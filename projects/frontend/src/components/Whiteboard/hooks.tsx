import * as React from 'react';
import { CanvasEmitter } from './CanvasEmitter';
import { useState } from './State';

export function useCanvasElement() {
  return React.useState(null);
}

export function useCanvasRef(setCanvas) {
  return React.useCallback((canvas) => {
    setCanvas(canvas);
  }, []);
}

export function useCanvasInitializer(canvas) {
  const state = useState();
  const emitterRef = React.useRef(null);

  React.useEffect(() => {
    if (!emitterRef.current) {
      return;
    }
    emitterRef.current.setLineWidth(state.strokeSize);
  }, [canvas, state.strokeSize]);

  React.useEffect(() => {
    if (!emitterRef.current) {
      return;
    }
    emitterRef.current.setStrokeColor(state.strokeColor);
  }, [canvas, state.strokeColor]);

  React.useEffect(() => {
    if (!emitterRef.current) {
      return;
    }
    emitterRef.current.setStrokeColor(
      state.tool === 'eraser' ? 'white' : state.strokeColor
    );
    emitterRef.current.setLineWidth(
      state.tool === 'eraser' ? 50 : state.strokeSize
    );
  }, [canvas, state.tool]);

  return React.useMemo(() => {
    if (!canvas) {
      return {};
    }

    const ctx = canvas.getContext('2d');
    const canvasEmitter = new CanvasEmitter(canvas, ctx);

    if (window.devicePixelRatio > 1) {
      var canvasWidth = canvas.width;
      var canvasHeight = canvas.height;

      canvas.width = canvasWidth * window.devicePixelRatio;
      canvas.height = canvasHeight * window.devicePixelRatio;
      canvas.style.width = canvasWidth + 'px';
      canvas.style.height = canvasHeight + 'px';

      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    }

    emitterRef.current = canvasEmitter;

    return {
      canvasEmitter,
      ctx,
    };
  }, [canvas]);
}
