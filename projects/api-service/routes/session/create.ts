import { Inject, Service } from 'typedi';
import { User, UserService } from '@talkspace/user-service';
import * as Joi from 'joi';

@Service()
class Route {
  @Inject()
  private userService: UserService;

  public async handle(req, res) {
    const data = await Joi.object({
      username: Joi.string().required(),
      password: Joi.string().required(),
    }).validateAsync(req.body);

    const user = await this.userService.validateUserCredentials(
      data.username,
      data.password
    );

    if (user) {
      req.session.userId = (user as User).id;
    }

    return user ? res.send(user) : res.status(401).end();
  }
}

export = Route;
