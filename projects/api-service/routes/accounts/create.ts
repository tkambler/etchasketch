import { Inject, Service } from 'typedi';
import { UserService } from '@talkspace/user-service';
import * as Joi from 'joi';

@Service()
class Route {
  @Inject()
  private userService: UserService;

  public async handle(req, res) {
    const data = await Joi.object({
      first_name: Joi.string().required(),
      last_name: Joi.string().required(),
      username: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    }).validateAsync(req.body);

    const user = await this.userService.createUser(data);

    return res.send(user);
  }
}

export = Route;
