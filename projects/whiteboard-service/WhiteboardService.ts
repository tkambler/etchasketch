/**
 * The User service is responsible for managing all things pertaining to users.
 */
import { Inject, Service } from 'typedi';
import { KnexService } from '@talkspace/knex-service';
import { ChildLogger, Logger } from '@talkspace/log-service';
import moment from 'moment';

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
};

@Service()
export class WhiteboardService {
  @ChildLogger({
    service: 'WhiteboardService',
  })
  private log: Logger;

  @Inject()
  private knex: KnexService;

  public async createWhiteboard({
    data,
    userId,
    svg,
  }: {
    data: any[];
    userId: string;
    svg: string;
  }) {
    const [id] = await (this.knex as any)('whiteboards').insert({
      name: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      data: JSON.stringify(data),
      svg,
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
      .first('id', 'name', 'data', 'user_id', 'created_at')
      .where('id', id);
  }

  public async getWhiteboardsForUser(userId: number) {
    return (this.knex as any)('whiteboards')
      .select('id', 'name', 'data', 'svg', 'created_at')
      .where('user_id', userId);
  }
}
