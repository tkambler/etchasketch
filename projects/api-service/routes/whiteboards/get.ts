import { Inject, Service } from 'typedi';
import { WhiteboardService } from '@talkspace/whiteboard-service';
import { omit } from 'lodash';

@Service()
class Route {
  @Inject()
  private whiteboardService: WhiteboardService;

  public async handle(req, res) {
    const whiteboard = await this.whiteboardService.getWhiteboardById(
      req.params.whiteboardId
    );
    if (!whiteboard) {
      return res.status(404).end();
    }
    return res.send({
      ...omit(whiteboard, ['png']),
      data: JSON.parse(whiteboard.data),
    });
  }
}

export = Route;
