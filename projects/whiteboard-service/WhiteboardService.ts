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
  }: {
    data: any[];
    userId: string;
  }) {
    console.log('save', data, userId);
    const whiteboard = await (this.knex as any)('whiteboards').insert({
      name: moment().format('dddd, MMMM Do YYYY, h:mm:ss a'),
      data: JSON.stringify(data),
      user_id: userId,
      created_at: new Date().getTime(),
    });
    console.log('inserted', whiteboard);
  }
}
