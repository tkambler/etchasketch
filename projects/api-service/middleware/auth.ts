/**
 * This middleware module allows all incoming requests that are attempting to create a new session. It
 * blocks all other incoming requests if they do not have an authenticated session.
 */
export = () => {
  return (req, res, next) => {
    if (req.url === '/api/accounts' && req.method === 'POST') {
      return next();
    }
    if (req.url === '/api/session') {
      return next();
    }
    if (req.user) {
      return next();
    }
    console.log('foo');
    return res.status(401).end();
  };
};
