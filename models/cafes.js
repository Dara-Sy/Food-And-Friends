const db = require('../config/connection');

function getAllCafes() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes`);
  return queryPromise;
}

function getAllBunnies() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'bunny'`);
  return queryPromise;
}

function getAllCats() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'cat'`);
  return queryPromise;
}

function getAllDogs() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'dog'`);
  return queryPromise;
}

function getAllHedgehogs() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'hedgehog'`);
  return queryPromise;
}

function getAllReptiles() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'reptile'`);
  return queryPromise;
}


module.exports = {
  getAllCafes,
  getAllBunnies,
  getAllCats,
  getAllDogs,
  getAllHedgehogs,
  getAllReptiles

  }
