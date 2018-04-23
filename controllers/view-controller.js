// const cafeDb = require('../../models/cafes');

module.exports = {


  sendCafes(req, res) {
    console.log('I send successful responses');

    res.render('home/index', {
      cafes: res.locals.cafes,
      animal: req.query.animal || 'All',
    });
  },

  sendAllCafes(req, res) {
    console.log('I send successful responses');
    res.render('home/allcafes', {
      cafes: res.locals.cafes,
    });
  },


  sendOneCafe(req, res) {
    res.render('home/onecafe', {
      cafe: res.locals.cafe,
    });
  },


  showNewCafeForm(req, res) {
    res.render('home/new', { cafes: res.locals.newCafe });
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


};
