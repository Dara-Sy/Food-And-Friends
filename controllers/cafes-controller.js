// import the cafe module
const cafeDb = require('../models/cafes');

// call the middleware functions here
module.exports = {

// get all cafes
  getAllCafesList(req, res, next) {
    console.log('List the cafes here');
    // pass in a req.query, if it exists
    console.log(req.query);

    cafeDb.getAllCafesList(req.query)
      .then((data) => {
        res.locals.cafes = data;
        console.log(res.locals.cafes);
        next();
      })
      .catch((err) => {
        next(err);
      });
  },

// get one cafe
  getOneCafe(req, res, next) {
    cafeDb.getOneCafe(req.params.id)
      .then((data) => {
        res.locals.cafe = data;
        next();
      })
      .catch((err) => {
        next(err);
      });
  },

// create one cafe
  createCafe(req, res, next) {
    cafeDb.createCafe(req.body)
      .then((data) => {
        res.locals.newCafe = data;
        console.log(data);
        next();
      })
      .catch((err) => {
        next(err);
      });
  },

// update one cafe
  updateCafe(req, res, next) {
    console.log(req.body, 'update controller');
    cafeDb.updateCafe(req.body)
      .then((data) => {
        res.locals.cafe = data;
        next();
      })
      .catch(err => next(err));
  },

//delete one cafe
  destroy(req, res, next) {
    console.log(req.body, 'delete cafe');
    cafeDb.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },

};
