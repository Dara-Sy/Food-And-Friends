const cafesRouter = require('express').Router();
const cafesController = require('../controllers/cafes-controller');
const viewController = require('../controllers/view-controller');

const cafeDb = require('../models/cafes');

function sendError(err, req, res, next) {
  console.log('error here');
  res.status(500).json({
    status: 'error',
    message: err.message
  })
}

cafesRouter.route('/')
  .get(cafesController.getAllCafes, viewController.sendCafes, sendError)

cafesRouter.route('/bunnies')
  .get(cafesController.getAllBunnies, viewController.sendBunnies, sendError)

cafesRouter.route('/cats')
  .get(cafesController.getAllCats, viewController.sendCats, sendError)

cafesRouter.route('/dogs')
  .get(cafesController.getAllDogs, viewController.sendDogs, sendError)

cafesRouter.route('/hedgehogs')
  .get(cafesController.getAllHedgehogs, viewController.sendHedgehogs, sendError)

cafesRouter.route('/reptiles')
  .get(cafesController.getAllReptiles, viewController.sendReptiles, sendError)

module.exports = cafesRouter;
