import { Service } from 'typedi';

@Service()
class Route {
  public async handle(req, res) {
    return res.send('foo');
  }
}

export = Route;
