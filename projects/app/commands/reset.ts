import { Command } from 'commander';
import { Container } from 'typedi';
import { setup } from '../lib/setup';
import { KnexService } from '@talkspace/knex-service';
const program = new Command();

program
  .action(async () => {
    await setup();
    const knex = Container.get(KnexService);
    await knex.migrate.rollback([], true);
    await knex.migrate.latest();
    await knex.seed.run();
    await knex.destroy();
  })
  .parse();