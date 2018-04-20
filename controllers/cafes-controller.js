const cafeDb = require('../models/cafes');


function getAllCafes(req, res, next) {
  console.log('List the cafes here');
  cafeDb.getAllCafes()
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
  cafeDb.getAllCafesList()
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

function create(req, res, next) {
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
module.exports = {
  getAllCafes,
  getAllCafesList,
  getAllBunnies,
  getAllCats,
  getAllDogs,
  getAllHedgehogs,
  getAllReptiles,
  create
}
