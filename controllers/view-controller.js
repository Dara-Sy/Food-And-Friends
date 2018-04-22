// const cafeDb = require('../../models/cafes');

module.exports = {


sendCafes(req, res) {
  console.log('I send successful responses');
  res.render('home/index', {
    cafes: res.locals.cafes
  })
},

sendAllCafes(req, res) {
  console.log('I send successful responses');
  res.render('home/allcafes', {
    cafes: res.locals.cafes
  })
},


sendBunnies(req, res) {
  console.log('Bunnies here');
  res.render('home/bunnies', {
    cafes: res.locals.cafes
  })
},


sendCats(req, res) {
  console.log('Cats here');
  res.render('home/cats', {
    cafes: res.locals.cafes
  })
},


sendDogs(req, res) {
  console.log('Dogs here');
  res.render('home/dogs', {
    cafes: res.locals.cafes
  })
},


sendHedgehogs(req, res) {
  console.log('Hogs here');
  res.render('home/hedgehogs', {
    cafes: res.locals.cafes
  })
},


sendReptiles(req, res) {
  console.log('Reptiles here');
  res.render('home/reptiles', {
    cafes: res.locals.cafes
  })
},

sendOneCafe(req, res) {
  res.render('home/onecafe', {
    cafe: res.locals.cafe
  })
},


showNewCafeForm(req, res) {
  res.render(`home/new`, {
    cafes: res.locals.newCafe});

},

viewCreateCafe(req, res) {
  res.redirect('/allCafes');
},


showEditForm(req, res) {
    res.render('home/edit', {
      cafe: res.locals.cafe,
    });
  },

viewUpdate(req, res) {
    res.redirect(`/allcafes/${req.params.id}`);
  },

deleteCafe(req, res) {
  res.redirect('/allcafes');
  },

// function deleteStudent(req, res) {
//   res.redirect(`students/index`);
// }


};
