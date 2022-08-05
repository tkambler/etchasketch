export = () => {
  return async (req, res, next) => {
    console.log('xxx', req.session);
    return next();
  };
};
