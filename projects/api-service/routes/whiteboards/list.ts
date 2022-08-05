import { Inject, Service } from 'typedi';
import { WhiteboardService } from '@talkspace/whiteboard-service';
import { omit } from 'lodash';

@Service()
class Route {
  @Inject()
  private whiteboardService: WhiteboardService;

  public async handle(req, res) {
    const whiteboards = await this.whiteboardService.getWhiteboardsForUser(
      req.user.id
    );
    return res.send(
      whiteboards.map((whiteboard) => ({
        ...whiteboard,
        user: omit(req.user, ['password_hash']),
      }))
    );
  }
}

export = Route;
