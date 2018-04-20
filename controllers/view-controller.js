// const cafeDb = require('../../models/cafes');

function sendCafes(req, res) {
  console.log('I send successful responses');
  res.render('home/index', {
    cafes: res.locals.cafes
  })
}

function sendBunnies(req, res) {
  console.log('Bunnies here');
  res.render('home/bunnies', {
    cafes: res.locals.cafes
  })
}

function sendCats(req, res) {
  console.log('Cats here');
  res.render('home/cats', {
    cafes: res.locals.cafes
  })
}

function sendDogs(req, res) {
  console.log('Dogs here');
  res.render('home/dogs', {
    cafes: res.locals.cafes
  })
}

function sendHedgehogs(req, res) {
  console.log('Hogs here');
  res.render('home/hedgehogs', {
    cafes: res.locals.cafes
  })
}

function sendReptiles(req, res) {
  console.log('Reptiles here');
  res.render('home/reptiles', {
    cafes: res.locals.cafes
  })
}

module.exports = {
  sendCafes,
  sendBunnies,
  sendCats,
  sendDogs,
  sendHedgehogs,
  sendReptiles

}
