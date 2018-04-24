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


  sendOneFav(req, res) {
    res.render('home/favs', {
      cafe: res.locals.cafe,
    });
  },




  showNewCafeForm(req, res) {
    res.render('home/new', { cafes: res.locals.newCafe });
  },

  viewCreateCafe(req, res) {
    res.redirect('/cafes/');
    //
  },


  showEditForm(req, res) {
    res.render('home/edit', {
      cafe: res.locals.cafe,
    });
  },

  viewUpdate(req, res) {
    res.redirect(`allcafes/${req.params.id}`);
  },

  deleteCafe(req, res) {
    // res.render('home/index', {
    //   cafe: res.locals.cafe,
    // });
    // res.redirect('');
    res.redirect('/cafes/');
    // put a / in front of cafe because it has to do with absolute path
  },


};
