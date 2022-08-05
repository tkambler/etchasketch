/**
 * This middleware module assigns a unique ID to each incoming request with which we can
 * create a DI container that is scoped specifically to the request.
 */
import { v4 as uuid } from 'uuid';

export = () => {
  return (req, res, next) => {
    req.requestId = uuid();
    return next();
  };
};
