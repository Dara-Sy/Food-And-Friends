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
  .post(cafesController.createCafe, viewController.viewCreateCafe, sendError)
  .put(cafesController.updateCafe, viewController.viewUpdate, sendError)

cafesRouter.route('/allcafes')
  .get(cafesController.getAllCafesList, viewController.sendAllCafes, sendError)


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

cafesRouter.route('/new')
  .get(cafesController.getAllCafesList, viewController.showNewCafeForm)

// showsRouter.get('/:id/edit', showsController.getOne, views.showEditForm, views.show404);

cafesRouter.route('/:id/edit')
  .get(cafesController.getOneCafe, viewController.showEditForm)

// cafesRouter.route('/edit')
  // .get(cafesController.getAllCafesList, viewController.showEditForm)

cafesRouter.route('/:id')
  .get(cafesController.getOneCafe, viewController.sendOneCafe, sendError)
  // .put(cafesController.viewUpdate)
  .delete(cafesController.destroy, viewController.deleteCafe, sendError)
  // .put(cafesController.update)
  // .delete(cafesController.destroy, viewController.deleteCafe)


module.exports = cafesRouter;
