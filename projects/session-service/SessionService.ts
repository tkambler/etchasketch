import { Inject, Service } from 'typedi';
import { KnexService } from '@talkspace/knex-service';

@Service()
export class SessionService {
  @Inject()
  private knex: typeof KnexService;
}
