
const db = require('../config/connection');

module.exports = {
  getAllCafes() {
    const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes`);
    return queryPromise;
  },

  getAllCafesList(filter) {
    let filterString = '';

    if ('animal' in filter) {
      filterString = ' AND animal LIKE $/animal/ ';
    }

    const dynamicQuery = `
      SELECT *
      FROM cafes
      WHERE true
      ${filterString}
      ORDER BY name
    `;

    return db.many(dynamicQuery, filter);
  },

  getOneCafe(id) {
    const query = db.one(`
    SELECT * FROM cafes
    WHERE id = $1`, id);
    return query;
  },

  getAllBunnies() {
    const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'bunny'`);
    // WHERE animal_id = 'bunny);
    return queryPromise;
  },

  getAllCats() {
    const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'cat'`);
    return queryPromise;
  },

  getAllDogs() {
    const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'dog'`);
    return queryPromise;
  },

  getAllHedgehogs() {
    const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'hedgehog'`);
    return queryPromise;
  },

  getAllReptiles() {
    const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes
    WHERE animal = 'reptile'`);
    return queryPromise;
  },


  createCafe(cafe) {
    const query = db.one(`
    INSERT INTO cafes
    (name, animal, location)
    VALUES ($/name/, $/animal/, $/location/)
    RETURNING *`, cafe);
    console.log(query);
    return query;
  },

  updateCafe(cafe) {
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
  },

  destroy(id) {
    const query = db.none(`
    DELETE FROM cafes
    WHERE id = $1`, id);
    return query;
  },


};
