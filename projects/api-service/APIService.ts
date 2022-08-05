/**
 * The API service is responsible for exposing an Express application that services incoming API requests.
 */
import { Inject, Service } from 'typedi';
import { ChildLogger, Logger } from '@talkspace/log-service';
import { ConfigService } from '@talkspace/config-service';
import express from 'express';
import memoize from 'memoize-decorator';
import meddleware from 'meddleware';
import * as http from 'http';

@Service()
export class APIService {
  @Inject()
  private config: ConfigService;

  @ChildLogger({
    service: 'APIService',
  })
  private log: Logger;
  private server: http.Server;
  private running = false;

  public async start() {
    if (this.running) {
      this.log.info('Already running.');
      return;
    }
    this.log.info('Starting.');
    return new Promise((resolve, reject) => {
      this.server = this.app.listen(this.config.get('port'), () => {
        this.log.info(
          {
            port: this.config.get('port'),
          },
          'Ready.'
        );
        this.running = true;
        return resolve(null);
      });
    });
  }

  public async stop() {
    if (!this.running) {
      this.log.info('Not running.');
      return;
    }
    return new Promise((resolve, reject) => {
      this.server.close(() => {
        this.running = false;
        this.log.info('Stopped.');
        return resolve(null);
      });
    });
  }

  @memoize
  private get app(): express.Application {
    const app = express();
    app.use(meddleware(this.config.get('meddleware')));
    return app;
  }
}
