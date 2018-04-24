// require express
// require cafes controller and view controller
const cafesRouter = require('express').Router();
const cafesController = require('../controllers/cafes-controller');
const viewController = require('../controllers/view-controller');

// connect to cafe module
const cafeDb = require('../models/cafes');

// create a send error function
function sendError(err, req, res, next) {
  console.log('error here');
  res.status(500).json({
    status: 'error',
    message: err.message,
  });
}

// get and post methods to the homepage cafes
cafesRouter.route('/')
  .get(cafesController.getAllCafesList, viewController.sendCafes, sendError)
  .post(cafesController.createCafe, viewController.viewCreateCafe, sendError);

// get method to all cafes
cafesRouter.route('/allcafes')
  .get(cafesController.getAllCafesList, viewController.sendAllCafes, sendError);

// get method to the add new cafe form
cafesRouter.route('/new')
  .get(cafesController.getAllCafesList, viewController.showNewCafeForm);

// get, put, and delete methods to the cafe/:id page
cafesRouter.route('/:id')
  .get(cafesController.getOneCafe, viewController.sendOneCafe, sendError)
  .put(cafesController.updateCafe, viewController.viewUpdate, sendError)
  .delete(cafesController.destroy, viewController.deleteCafe, sendError);

// get method to edit one cafe
cafesRouter.route('/:id/edit')
  .get(cafesController.getOneCafe, viewController.showEditForm);

module.exports = cafesRouter;
