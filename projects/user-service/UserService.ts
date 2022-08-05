/**
 * The App service represents the application as a whole. To start and stop the application, you
 * call start and stop methods that are exposed by this service. It will take care of starting
 * and stopping any underlying subsystems for you.
 */
import { Inject, Service } from 'typedi';
import { ChildLogger, Logger } from '@talkspace/log-service';

@Service()
export class UserService {
  @Inject()
  @ChildLogger({
    service: 'UserService',
  })
  private log: Logger;
}
