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

  public async createUser(data: {
    first_name: string;
    last_name: string;
    email: string;
    username: string;
    password: string;
  }) {
    const existing = await (this.knex as any)('users')
      .first('id')
      .where('username', data.username)
      .orWhere('email', data.email);
    if (existing) {
      throw new Error(
        `A user with that username or email address already exists.`
      );
    }
    const [id] = await (this.knex as any)('users').insert({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      username: data.username,
      password_hash: await bcrypt.hash(data.password, 10),
    });
    return this.getUserById(id);
  }
}
