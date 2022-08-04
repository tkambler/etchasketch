import { default as EventEmitter } from 'eventemitter3';
import { getMousePosition } from './util';

type EventTypes = {
  mousemove: (e: any) => any;
  mousedown: (e: any) => any;
  mouseup: (e: any) => any;
};

type Coordinates = {
  x: number;
  y: number;
};

export class CanvasEmitter extends EventEmitter<EventTypes> {
  private mouseLocation: Coordinates;
  private tracking = false;
  private events: any[] = [];

  constructor(private canvas, private ctx) {
    super();

    canvas.addEventListener('mousemove', (e) => {
      this.mouseLocation = getMousePosition(canvas, e);
      if (this.tracking) {
        this.commit();
      }
      this.emit('mousemove', {
        event: e,
        position: this.mouseLocation,
      });
    });

    canvas.addEventListener('mousedown', (e) => {
      this.tracking = true;
      ctx.beginPath();
      ctx.moveTo(this.mouseLocation.x, this.mouseLocation.y);
      this.emit('mousedown', {
        event: e,
        position: this.mouseLocation,
      });
    });

    canvas.addEventListener('mouseup', (e) => {
      this.tracking = false;
      this.emit('mouseup', {
        event: e,
        position: this.mouseLocation,
      });
    });
  }

  public setLineWidth(width: number) {
    this.ctx.lineWidth = width;
    this.events.push({
      type: 'setLineWidth',
      width,
    });
  }

  public setStrokeColor(color: string) {
    this.ctx.strokeStyle = color;
    this.events.push({
      type: 'setStrokeColor',
      color,
    });
  }

  public export() {
    return [...this.events];
  }

  private commit() {
    this.ctx.lineTo(this.mouseLocation.x, this.mouseLocation.y);
    this.ctx.stroke();
    this.events.push({
      type: 'lineTo',
      x: this.mouseLocation.x,
      y: this.mouseLocation.y,
    });
    this.events.push({
      type: 'stroke',
      x: this.mouseLocation.x,
      y: this.mouseLocation.y,
    });
  }
}
