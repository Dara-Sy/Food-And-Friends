const express = require('express');
const logger = require('morgan');
const axios = require('axios');
const path = require('path');
const methodOverride = require('method-override');

const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const cafesRouter = require('./routes/cafesRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/cafes/', cafesRouter);
app.use('/cafes/allcafes', cafesRouter);
app.use('/cafes/:id', cafesRouter);

// app.use('/cafes/new', cafesRouter);

// app.use('/users/:id/faves', cafesRouter);
// app.use('/users/:id/faves/:fid', cafesRouter);
// app.use('/users/:id/faves/new', cafesRouter);


app.get('/', (req, res) => {
  res.render('home/index', { cafes: res.locals.cafes });
  console.log('hi');
});


app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `);
});
