// import the config connection
const db = require('../config/connection');

// export our collection of functions
// these are SQL queries that grab specific requested data
module.exports = {
  getAllCafes() {
    const queryPromise = db.manyOrNone(`
    SELECT * FROM cafes`);
    return queryPromise;
  },

// the following code underneath this function was written by Jason Seminara
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

  getOneFav(id) {
    const query = db.one(`
    SELECT * FROM cafes
    WHERE id = $1`, id);
    return query;
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
    console.log("this is cafe in model:", cafe);
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
