const cafeDb = require('../models/cafes');


function getAllCafes(req, res, next) {
  console.log('List the cafes here');

  cafeDb.getAllCafes(req.query)
  .then(data => {
    res.locals.cafes = data;
    next();

  })
  .catch(err => {
    next(err);
  })
}

function getAllCafesList(req, res, next) {
  console.log('List the cafes here');
  // pass in a req.query, if it exists
  debugger
  cafeDb.getAllCafesList(req.query)
  .then(data => {
    res.locals.cafes = data;
    next();

  })
  .catch(err => {
    next(err);
  })
}


function getAllBunnies(req, res, next) {
  console.log('List the bunnies here');
  cafeDb.getAllBunnies()
  .then(data => {
    res.locals.cafes = data;
    next();

  })
  .catch(err => {
    next(err);
  })
}

function getAllCats(req, res, next) {
  console.log('List the cats here');
  cafeDb.getAllCats()
  .then(data => {
    res.locals.cafes = data;
    next();

  })
  .catch(err => {
    next(err);
  })
}

function getAllDogs(req, res, next) {
  console.log('List the dogs here');
  cafeDb.getAllDogs()
  .then(data => {
    res.locals.cafes = data;
    next();

  })
  .catch(err => {
    next(err);
  })
}

function getAllHedgehogs(req, res, next) {
  console.log('List the hogs here');
  cafeDb.getAllHedgehogs()
  .then(data => {
    res.locals.cafes = data;
    next();

  })
  .catch(err => {
    next(err);
  })
}

function getAllReptiles(req, res, next) {
  console.log('List the reptiles here');
  cafeDb.getAllReptiles()
  .then(data => {
    res.locals.cafes = data;
    next();

  })
  .catch(err => {
    next(err);
  })
}

function getOneCafe(req, res, next) {
  cafeDb.getOneCafe(req.params.id)
    .then(data=> {
      res.locals.cafe = data;
      next();
    })
    .catch(err=> {
      next(err);
    })
}


function createCafe(req, res, next) {
  cafeDb.createCafe(req.body)
  .then(data => {
    res.locals.newCafe = data;
    console.log(data);
    next();
  })
  .catch(err => {
    next(err);
  })
}


function updateCafe(req, res, next) {
    console.log(req.body, 'update controller');
    cafeDb.updateCafe(req.body)
      .then((show) => {
        res.locals.cafe = data;
        next();
      })
      .catch(err => next(err));
  }

function destroy(req, res, next) {
  console.log(req.body, 'delete cafe');
  cafeDb.destroy(req.params.id)
    .then(() => next())
    .catch(err => next(err));
}

// function destroy(req, res) {
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



module.exports = {
  getAllCafes,
  getAllCafesList,
  getAllBunnies,
  getAllCats,
  getAllDogs,
  getAllHedgehogs,
  getAllReptiles,
  getOneCafe,
  createCafe,
  updateCafe,
  destroy
}
