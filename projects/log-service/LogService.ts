/**
 * Log service.
 */
import { Container, Service } from 'typedi';
import { default as pino, Logger } from 'pino';
export { Logger };

export function LogFactory(): Logger {
  return pino(
    {
      level: process.env.AWS_LAMBDA_FUNCTION_VERSION ? 'info' : 'debug',
    },
    pino.multistream(
      [
        {
          level: 'debug',
          stream: process.stdout,
        },
        {
          level: 'info',
          stream: process.stdout,
        },
        {
          level: 'fatal',
          stream: process.stdout,
        },
        {
          level: 'error',
          stream: process.stdout,
        },
        {
          level: 'warn',
          stream: process.stdout,
        },
        {
          level: 'trace',
          stream: process.stdout,
        },
      ],
      {
        levels: {
          silent: Infinity,
          fatal: 60,
          error: 50,
          warn: 40,
          info: 30,
          debug: 20,
          trace: 10,
        },
        dedupe: true,
      }
    )
  );
}

export const LogService = Service(LogFactory);

/**
 * @decorator
 * @param props
 */
export function ChildLogger(props: object) {
  return function (target: any, propertyKey: string) {
    const logService = Container.get(LogService);
    Object.defineProperties(target, {
      [propertyKey]: {
        value: logService.child({
          ...props,
        }),
        writable: false,
        enumerable: true,
      },
    });
  };
}
