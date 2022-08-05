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
      svg: Joi.string().required(),
    }).validateAsync(req.body);

    const whiteboard = await this.whiteboardService.createWhiteboard({
      data: data.data,
      svg: data.svg,
      userId: req.user.id,
    });

    return res.send(whiteboard);
  }
}

export = Route;
