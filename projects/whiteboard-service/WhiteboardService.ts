/**
 * The whiteboard service is responsible for managing all things pertaining to whiteboards.
 */
import { Inject, Service } from 'typedi';
import { KnexService } from '@talkspace/knex-service';
import { ChildLogger, Logger } from '@talkspace/log-service';
import sharp from 'sharp';
import moment from 'moment';

@Service()
export class WhiteboardService {
  @ChildLogger({
    service: 'WhiteboardService',
  })
  private log: Logger;

  @Inject()
  private knex: KnexService;

  /**
   * Persists a whiteboard to the database. As part of this process, it will also generate a PNG from
   * the provided SVG data and persist that, as well.
   */
  public async createWhiteboard({
    data,
    drawingTime,
    svg,
    userId,
  }: {
    data: any[];
    drawingTime: number;
    userId: string;
    svg: string;
  }) {
    const png = await sharp(Buffer.from(svg, 'utf-8')).png().toBuffer();

    const [id] = await (this.knex as any)('whiteboards').insert({
      name: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      data: JSON.stringify(data),
      svg,
      png,
      drawing_time: drawingTime,
      user_id: userId,
      created_at: new Date().getTime(),
    });
    this.log.info(
      {
        id,
        userId,
      },
      'New whiteboard created.'
    );
    return (this.knex as any)('whiteboards')
      .first('id', 'name', 'data', 'user_id', 'drawing_time', 'created_at')
      .where('id', id);
  }

  /**
   * Returns a list of all whiteboards that belong to the specified user.
   */
  public async getWhiteboardsForUser(userId: number) {
    const rows = await (this.knex as any)('whiteboards as w')
      .innerJoin('users as u', 'u.id', '=', 'w.user_id')
      .select(
        'w.id',
        'w.name',
        'w.data',
        'w.svg',
        'w.png',
        'w.drawing_time',
        'w.created_at',
        'u.id as user_id',
        'u.first_name',
        'u.last_name',
        'u.username',
        'u.email'
      )
      .where('w.user_id', userId);
    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      data: row.data,
      svg: row.svg,
      png: row.png,
      drawing_time: row.drawing_time,
      user: {
        id: row.user_id,
        first_name: row.first_name,
        last_name: row.last_name,
        username: row.username,
        email: row.email,
      },
    }));
  }

  /**
   * Returns a list of all whiteboards.
   */
  public async getWhiteboards() {
    const rows = await (this.knex as any)('whiteboards as w')
      .innerJoin('users as u', 'u.id', '=', 'w.user_id')
      .select(
        'w.id',
        'w.name',
        'w.data',
        'w.svg',
        'w.png',
        'w.drawing_time',
        'w.created_at',
        'u.id as user_id',
        'u.first_name',
        'u.last_name',
        'u.username',
        'u.email'
      );
    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      data: row.data,
      svg: row.svg,
      png: row.png,
      drawing_time: row.drawing_time,
      user: {
        id: row.user_id,
        first_name: row.first_name,
        last_name: row.last_name,
        username: row.username,
        email: row.email,
      },
    }));
  }

  /**
   * Fetches a single whiteboard by ID.
   */
  public async getWhiteboardById(id: number) {
    const rows = await (this.knex as any)('whiteboards as w')
      .innerJoin('users as u', 'u.id', '=', 'w.user_id')
      .select(
        'w.id',
        'w.name',
        'w.data',
        'w.svg',
        'w.png',
        'w.drawing_time',
        'w.created_at',
        'u.id as user_id',
        'u.first_name',
        'u.last_name',
        'u.username',
        'u.email'
      )
      .where('w.id', id);
    return rows.map((row) => ({
      id: row.id,
      name: row.name,
      data: row.data,
      svg: row.svg,
      png: row.png,
      drawing_time: row.drawing_time,
      user: {
        id: row.user_id,
        first_name: row.first_name,
        last_name: row.last_name,
        username: row.username,
        email: row.email,
      },
    }))[0];
  }

  /**
   * Destroys a single whiteboard by ID.
   */
  public async destroyWhiteboardById(id: number) {
    await (this.knex as any)('whiteboards').where('id', id).del();
  }
}
