/**
 * Returns an object describing the requester's session (if one exists). Otherwise, returns 404.
 */
import { Service } from 'typedi';

@Service()
class Route {
  public async handle(req, res) {
    if (req.user) {
      return res.send(req.user);
    }
    return res.status(404).end();
  }
}

export = Route;
