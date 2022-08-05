import { default as EventEmitter } from 'eventemitter3';
import C2S from 'canvas2svg';
import { getMousePosition } from './util';
import delay from 'delay';

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
  private startTime: number;
  private locked = false;

  constructor(private canvas, private ctx) {
    super();

    canvas.addEventListener('mousemove', (e) => {
      if (this.locked) {
        return;
      }
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
      if (this.locked) {
        return;
      }
      if (!this.startTime) {
        this.startTime = new Date().getTime();
      }
      this.tracking = true;
      this.events.push({
        type: 'beginPath',
      });
      this.events.push({
        type: 'moveTo',
        x: this.mouseLocation.x,
        y: this.mouseLocation.y,
      });
      ctx.beginPath();
      ctx.moveTo(this.mouseLocation.x, this.mouseLocation.y);
      this.emit('mousedown', {
        event: e,
        position: this.mouseLocation,
      });
    });

    canvas.addEventListener('mouseup', (e) => {
      if (this.locked) {
        return;
      }
      this.tracking = false;
      this.emit('mouseup', {
        event: e,
        position: this.mouseLocation,
      });
    });
  }

  public setEvents(events: any[]) {
    this.events = events;
  }

  public async replay() {
    const ctx = this.ctx;
    for (const e of this.events) {
      switch (e.type) {
        case 'beginPath':
          ctx.beginPath();
          break;
        case 'moveTo':
          ctx.moveTo(e.x, e.y);
          break;
        case 'setLineWidth':
          ctx.lineWidth = e.width;
          break;
        case 'setStrokeColor':
          ctx.strokeStyle = e.color;
          break;
        case 'lineTo':
          ctx.lineTo(e.x, e.y);
          break;
        case 'stroke':
          ctx.stroke();
          break;
        default:
          throw new Error(`Unknown event type: ${e.type}`);
      }
      await delay(10);
    }
  }

  public setLineWidth(width: number) {
    if (this.locked) {
      return;
    }
    this.ctx.lineWidth = width;
    this.events.push({
      type: 'setLineWidth',
      width,
    });
  }

  public setStrokeColor(color: string) {
    if (this.locked) {
      return;
    }
    this.ctx.strokeStyle = color;
    this.events.push({
      type: 'setStrokeColor',
      color,
    });
  }

  public export() {
    this.locked = true;
    this.tracking = false;
    return {
      data: [...this.events],
      svg: this.exportSVG(),
      drawingTime: Math.floor((new Date().getTime() - this.startTime) / 1000),
    };
  }

  private exportSVG() {
    const ctx = new C2S(1500, 800);
    ctx.moveTo(0, 0);
    this.events.forEach((e) => {
      switch (e.type) {
        case 'beginPath':
          ctx.beginPath();
          break;
        case 'moveTo':
          ctx.moveTo(e.x, e.y);
          break;
        case 'setLineWidth':
          ctx.lineWidth = e.width;
          break;
        case 'setStrokeColor':
          ctx.strokeStyle = e.color;
          break;
        case 'lineTo':
          ctx.lineTo(e.x, e.y);
          break;
        case 'stroke':
          ctx.stroke();
          break;
        default:
          throw new Error(`Unknown event type: ${e.type}`);
      }
    });
    return ctx.getSerializedSvg();
  }

  private commit() {
    if (this.locked) {
      return;
    }
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
