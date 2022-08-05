/**
 * Returns an object describing the requester's session (if one exists). Otherwise, returns 404.
 */
import { Service } from 'typedi';

@Service()
class Route {
  public async handle(req, res) {
    req.session.destroy();
    req.user = null;
    return res.status(200).end();
  }
}

export = Route;
