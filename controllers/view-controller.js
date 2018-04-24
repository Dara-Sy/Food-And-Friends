// call the middleware functions here in view contoller

module.exports = {

  // send cafes (homepage )
  sendCafes(req, res) {
    console.log('I send successful responses');

    res.render('home/index', {
      cafes: res.locals.cafes,
      animal: req.query.animal || 'All',
    });
  },

// send all cafes
  sendAllCafes(req, res) {
    console.log('I send successful responses');
    res.render('home/allcafes', {
      cafes: res.locals.cafes,
    });
  },

// send one cafes
  sendOneCafe(req, res) {
    res.render('home/onecafe', {
      cafe: res.locals.cafe,
    });
  },

// shows add form
  showNewCafeForm(req, res) {
    res.render('home/new', { cafes: res.locals.newCafe });
  },

// shows new cafe
  viewCreateCafe(req, res) {
    res.redirect('/cafes/');
    //
  },

// shows edit form
  showEditForm(req, res) {
    res.render('home/edit', {
      cafe: res.locals.cafe,
    });
  },

// shows edited cafe
  viewUpdate(req, res) {
    res.redirect(`allcafes/${req.params.id}`);
  },

// deletes cafe
  deleteCafe(req, res) {
    // res.render('home/index', {
    //   cafe: res.locals.cafe,
    // });
    // res.redirect('');
    res.redirect('/cafes/');
    // put a / in front of cafe because it has to do with absolute path
  },


};
