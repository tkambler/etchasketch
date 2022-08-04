/**
 * The App service represents the application as a whole. To start and stop the application, you
 * call start and stop methods that are exposed by this service. It will take care of starting
 * and stopping any underlying subsystems for you.
 */
import { Inject, Service } from 'typedi';
import { APIService } from '@talkspace/api-service';
import { ChildLogger, Logger } from '@talkspace/log-service';

@Service()
export class AppService {
  @Inject()
  private apiService: APIService;

  @ChildLogger({
    service: 'AppService',
  })
  private log: Logger;

  private running = false;

  public async start() {
    if (this.running) {
      this.log.info('Already running.');
      return;
    }
    this.log.info('Starting.');
    await this.apiService.start();
  }

  public async stop() {
    if (!this.running) {
      this.log.info('Not running.');
      return;
    }
    this.log.info('Stopping.');
    await this.apiService.stop();
    this.log.info('Stopped.');
  }
}
