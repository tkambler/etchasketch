import { Inject, Service } from 'typedi';
import { WhiteboardService } from '@talkspace/whiteboard-service';

@Service()
class Route {
  @Inject()
  private whiteboardService: WhiteboardService;

  public async handle(req, res) {
    const whiteboard = await this.whiteboardService.getWhiteboardById(
      req.params.whiteboardId
    );
    res.set('content-type', 'image/png');
    return res.send(whiteboard.png);
  }
}

export = Route;
