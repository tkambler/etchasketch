import { Container } from 'typedi';
import express from 'express';

export = function ({ routes = [] }: any = []) {
  const app = express();

  function onMount(parent) {
    parent._router.stack.pop();

    for (const route of routes) {
      if (route.di !== false) {
        if (typeof route.handler === 'string') {
          route.fs_path = route.handler;
          route.handler = require(route.handler);
        }

        const handler = async (req, res, next) => {
          const container = Container.of(req.requestId);
          const h: any = container.get(route.handler);
          try {
            await h.handle(req, res, next);
            Container.reset(req.requestId);
          } catch (err) {
            Container.reset(req.requestId);
            return next(err);
          }
        };
        parent
          .route(route.path)
          [route.method.toLowerCase()](...(route.middleware || []), handler);
      } else {
        parent
          .route(route.path)
          [route.method.toLowerCase()](
            ...(route.middleware || []),
            route.handler
          );
      }
    }
  }

  app.once('mount', onMount);

  return app;
};
