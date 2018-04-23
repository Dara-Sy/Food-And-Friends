const cafesRouter = require('express').Router();
const cafesController = require('../controllers/cafes-controller');
const viewController = require('../controllers/view-controller');

const cafeDb = require('../models/cafes');

function sendError(err, req, res, next) {
  console.log('error here');
  res.status(500).json({
    status: 'error',
    message: err.message,
  });
}

cafesRouter.route('/')
  .get(cafesController.getAllCafesList, viewController.sendCafes, sendError)
  .post(cafesController.createCafe, viewController.viewCreateCafe, sendError)


cafesRouter.route('/allcafes')
  .get(cafesController.getAllCafesList, viewController.sendAllCafes, sendError);


cafesRouter.route('/new')
  .get(cafesController.getAllCafesList, viewController.showNewCafeForm);


cafesRouter.route('/:id')
  .get(cafesController.getOneCafe, viewController.sendOneCafe, sendError)
  .delete(cafesController.destroy, viewController.deleteCafe, sendError)
  .put(cafesController.updateCafe, viewController.viewUpdate, sendError);

cafesRouter.route('/:id/edit')
  .get(cafesController.getOneCafe, viewController.showEditForm);

// cafesRouter.route('/users/:id/faves')
//   .get(cafesController.getOneFav, viewController.sendOneFav, sendError)
//   .post(cafesController.addFav, viewController.sendOneCafe, sendError);
// cafesRouter.route('/users/:id/faves/:fid')
  // .delete(cafesController.delFav, viewController.sendOneCafe, sendError);
// cafesRouter.route('/users/:id/faves/new')
//   .get(cafesController.getOneCafe, viewController.sendOneCafe, sendError);



module.exports = cafesRouter;
