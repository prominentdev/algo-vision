const express = require('express');
const serverRouter = express.Router();


serverRouter.route('/server')
  .all((req, res, next)=>{
    next();
  })
  .get((req, res, next)=>{
    res.status(200).json({msg: 'Server Route'});
  });


module.exports = serverRouter;