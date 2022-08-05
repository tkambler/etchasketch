import { Inject, Service } from 'typedi';
import { WhiteboardService } from '@talkspace/whiteboard-service';

@Service()
class Route {
  @Inject()
  private whiteboardService: WhiteboardService;

  public async handle(req, res) {
    const whiteboards = await this.whiteboardService.getWhiteboards();
    return res.send(whiteboards);
  }
}

export = Route;
