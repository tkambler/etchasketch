import { Container } from 'typedi';
import { UserService } from '@talkspace/user-service';

export = () => {
  const userService = Container.get(UserService);
  return async (req, res, next) => {
    if (!req.session.userId) {
      return next();
    }
    const user = await userService.getUserById(req.session.userId);
    if (user) {
      req.user = user;
    }
    return next();
  };
};
