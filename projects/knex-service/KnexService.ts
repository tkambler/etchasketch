import { ConfigService } from '@talkspace/config-service';
import { Container, Service } from 'typedi';
import KnexFactory from 'knex';
import * as path from 'path';

@Service({
  global: true,
})
export class KnexService {
  public constructor() {
    const config = Container.get(ConfigService);

    const knex = KnexFactory({
      client: 'better-sqlite3',
      useNullAsDefault: true,
      connection: {
        filename: path.resolve(config.get('appPath'), 'db.sqlite'),
      },
      migrations: {
        directory: path.resolve(config.get('appPath'), 'migrations'),
        loadExtensions: ['.ts'],
      },
    });
    return knex;
  }
}
