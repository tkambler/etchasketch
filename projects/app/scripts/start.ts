import { setup } from '../lib/setup';
import { Container } from 'typedi';
import { AppService } from '@talkspace/app-service';

(async () => {
  await setup();
  const appService = Container.get(AppService);
  await appService.start();
})();
