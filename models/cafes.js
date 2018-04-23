
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

  getOneFav(id) {
    const query = db.one(`
    SELECT * FROM cafes
    WHERE id = $1`, id);
    return query;
  },



  // 1st attempt
  // getOneFav(id) {
  //   const query = db.one(`
  //   SELECT * FROM cafes
  //   JOIN animals
  //     ON(animasls.id = cafe.id)
  //   WHERE true
  //   AND animal.name = $1,
  //   AND
  //   id = $1`, id);
  //   return query;
  // },


  // 2nd attempt
  //   getOneFav(filter) {
  //   let filterString = '';

  //   if ('animal' in filter) {
  //     filterString = ' AND animal LIKE $/animal/ ';
  //   }

  //   const dynamicQuery = `
  //     SELECT *
  //     FROM cafes
  //     WHERE true
  //     ${filterString}
  //     ORDER BY name
  //   `;

  //   return db.many(dynamicQuery, filter);
  // },


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
