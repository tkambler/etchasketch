/**
 * The User service is responsible for managing all things pertaining to users.
 */
import { Inject, Service } from 'typedi';
import { KnexService } from '@talkspace/knex-service';
import { ChildLogger, Logger } from '@talkspace/log-service';
import { omit } from 'lodash';
import * as bcrypt from 'bcrypt';

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  username: string;
};

@Service()
export class UserService {
  @ChildLogger({
    service: 'UserService',
  })
  private log: Logger;

  @Inject()
  private knex: KnexService;

  /**
   * Verifies that the supplied username / credentials match the hash that we have on record. If so,
   * an object describing the user is returned. If not, returns false.
   */
  public async validateUserCredentials(
    username: string,
    password: string
  ): Promise<User | boolean> {
    const user = await (this.knex as any)('users')
      .first(
        'id',
        'first_name',
        'last_name',
        'email',
        'username',
        'password_hash'
      )
      .where('username', username);
    const valid = await bcrypt.compare(password, user.password_hash);
    return valid ? omit(user, ['password_hash']) : false;
  }

  /**
   * Fetches user by ID.
   */
  public getUserById(id: number) {
    return (this.knex as any)('users')
      .first(
        'id',
        'first_name',
        'last_name',
        'email',
        'username',
        'password_hash'
      )
      .where('id', id);
  }
}
