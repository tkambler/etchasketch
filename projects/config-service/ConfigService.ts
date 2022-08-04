import { Service } from 'typedi';
import { cloneDeep } from 'lodash';
import * as confit from 'confit';
import * as path from 'path';
import * as util from './util';
export * from './util';

/**
 * @class ConfigService
 */
@Service({
  global: true,
})
export class ConfigService {
  private config: confit.ConfigStore | null = null;
  private srcDir = path.resolve(process.cwd(), 'config');

  public async make() {
    this.config = await util.initConfig(util.createConfig(this.srcDir));
    return this;
  }

  public get(key?: string) {
    if (!this.config) {
      throw new Error(`ConfigService has not been initialized.`);
    }
    if (key) {
      return this.config.get(key);
    } else {
      return cloneDeep(this.config._store);
    }
  }

  public set(key: string, val: any) {
    if (!this.config) {
      throw new Error(`ConfigService has not been initialized.`);
    }
    return this.config.set(key, val);
  }

  public use(configObj: Record<string, any>) {
    if (!this.config) {
      throw new Error(`ConfigService has not been initialized.`);
    }
    return this.config.use(configObj);
  }
}
