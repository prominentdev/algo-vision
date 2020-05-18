const userRouter = require('express').Router();

userRouter.route('/user')
  .all((req, res, next) => {
    next();
  })
  .get((req, res, next) => {
    res.status(200).json({msg: 'User route'});
  });


module.exports = userRouter;