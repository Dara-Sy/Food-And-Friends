const pgp = require('pg-promise')();

const db = require('../config/connection');

function getAllCafes() {
  const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes`);
  return queryPromise;
}

function getAllCafesList() {
  const queryPromise = db.many(`
    SELECT *
    FROM cafes
    ORDER BY name
  `);
  return queryPromise;
}

function getOneCafe(id) {
  const query = db.one(`
    SELECT * FROM cafes
    WHERE id = $1`, id);
  return query;
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


function createCafe(cafe) {
  const query = db.one(`
    INSERT INTO cafes
    (name, animal, location)
    VALUES ($/name/, $/animal/, $/location/)
    RETURNING *`, cafe);
  console.log(query);
  return query;
}

function updateCafe(cafe) {
   const query = db.one(`
      UPDATE cafes
      SET
      name = $/name/,
      animal = $/animal/,
      location = $/location/
      WHERE id = $/id/
      RETURNING *
      `, cafe);
   return query;
  }

function destroy(id) {
  const query = db.none(`
    DELETE FROM cafes
    WHERE id = $1`, id);
  return query;
}




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
