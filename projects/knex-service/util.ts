import handlers from 'shortstop-handlers';
import * as fs from 'fs-extra';
import * as path from 'path';
import confit from 'confit';

export function createConfig(srcDir: string) {
  const _handlers = {
    base64: handlers.base64(),
    env: handlers.env(),
  };

  const instance = confit({
    defaults: 'config.json',
    basedir: srcDir,
    protocols: {
      ..._handlers,
    },
  });

  const overrideFile = path.resolve(srcDir, 'override.json');

  if (fs.pathExistsSync(overrideFile)) {
    return instance.addOverride(overrideFile);
  } else {
    return instance;
  }
}

export function initConfig(
  config: confit.ConfigFactory
): Promise<confit.ConfigStore> {
  return new Promise((resolve, reject) => {
    config.create((err, config) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(config);
      }
    });
  });
}
