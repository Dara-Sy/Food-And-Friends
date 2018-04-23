const cafeDb = require('../models/cafes');


module.exports = {


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

  getOneFav(req, res, next) {
    cafeDb.getOneFav(req.params.id)
      .then((data) => {
        res.locals.cafe = data;
        next();
      })
      .catch((err) => {
        next(err);
      });
  },



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

  getOneFav(req, res, next) {
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


  updateCafe(req, res, next) {
    console.log(req.body, 'update controller');
    cafeDb.updateCafe(req.body)
      .then((data) => {
        res.locals.cafe = data;
        next();
      })
      .catch(err => next(err));
  },

  destroy(req, res, next) {
    console.log(req.body, 'delete cafe');
    cafeDb.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },

// , destroy(req, res) {
//   cafeDb.destroy(req.params.id)
//     .then(() => {
//       res.redirect('/allcafes');
//     })
//     .catch(err => {
//       res.status(500).json({
//         message:err.message
//       })
//     })
// }


};
