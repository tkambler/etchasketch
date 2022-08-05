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
    if (!whiteboard) {
      return res.status(404).end();
    }
    if (whiteboard.user.id !== req.user.id) {
      return res.status(401).end();
    }
    await this.whiteboardService.destroyWhiteboardById(req.params.whiteboardId);
    res.status(200).end();
  }
}

export = Route;
