import * as React from 'react';
import { CanvasEmitter } from './CanvasEmitter';
import { degToRad } from './util';
import { isEqual } from 'lodash';
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

    // ctx.scale(2, 2);
    // ctx.fillStyle = '#FF0000';
    // ctx.fillRect(0, 0, 150, 75);

    console.log('window.devicePixelRatio', window.devicePixelRatio);

    function drawTriangle() {
      ctx.fillStyle = 'rgb(0, 0, 0)';
      ctx.beginPath();
      ctx.moveTo(50, 50);
      ctx.lineTo(150, 50);
      const triHeight = 50 * Math.tan(degToRad(60));
      ctx.lineTo(100, 50 + triHeight);
      ctx.lineTo(50, 50);
      ctx.fill();
    }

    function drawSquare() {
      ctx.fillStyle = 'rgb(0 0, 0)';
      ctx.fillRect(10, 10, 75, 75);
    }

    function drawStrokes() {
      // First path
      ctx.strokeStyle = 'blue';
      // ctx.beginPath();
      // ctx.moveTo(20, 20);
      // ctx.lineTo(200, 20);
      // ctx.stroke();
      // ctx.beginPath();
      // ctx.moveTo(300, 20);
      // ctx.stroke();

      // First path
      ctx.beginPath();
      ctx.moveTo(20, 20);
      ctx.lineTo(200, 20);
      ctx.stroke();

      // Second path
      // ctx.beginPath();
      // ctx.strokeStyle = 'green';
      // ctx.moveTo(20, 20);
      // ctx.lineTo(120, 120);
      // ctx.stroke();
    }

    function drawBezier() {
      // Define the points as {x, y}
      let start = { x: 50, y: 20 };
      let cp1 = { x: 230, y: 30 };
      let cp2 = { x: 150, y: 80 };
      let end = { x: 250, y: 100 };

      // Cubic Bézier curve
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, end.x, end.y);
      ctx.stroke();

      // Start and end points
      ctx.fillStyle = 'blue';
      ctx.beginPath();
      ctx.arc(start.x, start.y, 5, 0, 2 * Math.PI); // Start point
      ctx.arc(end.x, end.y, 5, 0, 2 * Math.PI); // End point
      ctx.fill();

      // Control points
      ctx.fillStyle = 'red';
      ctx.beginPath();
      ctx.arc(cp1.x, cp1.y, 5, 0, 2 * Math.PI); // Control point one
      ctx.arc(cp2.x, cp2.y, 5, 0, 2 * Math.PI); // Control point two
      ctx.fill();
    }

    function drawTmp() {
      ctx.beginPath();
      // ctx.strokeStyle = 'blue';
      ctx.moveTo(20, 20);
      ctx.lineTo(200, 20);
      ctx.lineTo(300, 50);
      // ctx.moveTo(300, 50);
      ctx.stroke();
    }

    // drawTriangle();
    // drawSquare();
    // drawStrokes();
    // drawBezier();
    // drawTmp();

    // Drawing strokes
    // ctx.fillStyle = 'rgb(255, 0, 0)';
    // ctx.beginPath();
    // ctx.moveTo(50, 50);
    // ctx.moveTo(55, 55);
    // // draw your path
    // ctx.stroke();
    // ctx.moveTo(60, 60);
    // ctx.stroke();
    // ctx.moveTo(70, 70);
    // ctx.fill();

    // Drawing lines
    // ctx.fillStyle = 'rgb(255, 0, 0)';
    // ctx.beginPath();
    // ctx.moveTo(50, 50);
    // ctx.lineTo(150, 50);
    // const triHeight = 50 * Math.tan(degToRad(60));
    // ctx.lineTo(100, 50 + triHeight);
    // ctx.lineTo(50, 50);
    // ctx.fill();

    emitterRef.current = canvasEmitter;

    return {
      canvasEmitter,
      ctx,
    };
  }, [canvas]);
}

export function usePersistence(canvasEmitter) {
  const dataRef = React.useRef(null);
  React.useEffect(() => {
    if (!canvasEmitter) {
      return;
    }
    const intervalId = setInterval(() => {
      const data = canvasEmitter.export();
      console.log('data', data);
      if (data.length && !isEqual(dataRef.current, data)) {
        dataRef.current = data;
        console.log('Saving...');
      }
    }, 1000);
  }, [canvasEmitter]);
}
