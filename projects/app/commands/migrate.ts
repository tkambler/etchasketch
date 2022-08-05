import { Command } from 'commander';
import { Container } from 'typedi';
import { setup } from '../lib/setup';
import { KnexService } from '@talkspace/knex-service';
import retry, { AbortError } from 'p-retry';
import delay from 'delay';
const program = new Command();
const retries = 5;

program
  .action(async () => {
    await setup();
    const knex = Container.get(KnexService);

    await retry(
      async () => {
        try {
          await knex.migrate.latest();
        } catch (err) {
          if ((err as any).message !== 'Connection terminated unexpectedly') {
            throw new AbortError((err as any).message);
          }
          throw err;
        }
      },
      {
        onFailedAttempt: async (err) => {
          console.log(
            `Failed to run DB migrations. Is the database ready? Will try ${
              retries - err.attemptNumber
            } more time(s).`
          );
          await delay(err.attemptNumber * 1000);
        },
        retries,
      }
    );

    await knex.destroy();
  })
  .parse();
