import { Inject, Service } from 'typedi';
import { WhiteboardService } from '@talkspace/whiteboard-service';
import * as Joi from 'joi';

@Service()
class Route {
  @Inject()
  private whiteboardService: WhiteboardService;

  public async handle(req, res) {
    const data = await Joi.object({
      data: Joi.array().required(),
    }).validateAsync(req.body);

    const whiteboard = await this.whiteboardService.createWhiteboard({
      data,
      userId: req.user.id,
    });

    console.log('whiteboard', whiteboard);

    return res.status(200).end();
  }
}

export = Route;
