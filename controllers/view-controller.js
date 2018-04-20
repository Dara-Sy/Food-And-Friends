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


showCreateCafeForm(req, res) {
  res.render(`home/new`, res.locals.cafes);
}


,
sendCreateCafe(req, res) {
  cafe = res.locals.newCafe
  res.redirect(`home/new/${cafe.id}`);
},

// function sendCafes(req, res) {
//   res.render('home/new', {
//     cafe: res.locals.newCafe,
//   })

// }


};
