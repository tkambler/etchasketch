import { ConfigService } from '@talkspace/config-service';
import { Container, Service } from 'typedi';
import * as path from 'path';

export const KnexService = Service(function () {
  const config = Container.get(ConfigService);
  return require('knex')({
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
});
