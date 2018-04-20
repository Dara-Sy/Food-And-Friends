const express = require('express');
const logger = require('morgan');
const axios = require('axios');

const app = express();

const PORT = process.env.PORT || 3000;

const cafesRouter = require('./routes/cafesRoutes');

app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cafesRouter);
app.use('/bunnies', cafesRouter);
app.use('/cats', cafesRouter);
app.use('/dogs', cafesRouter);
app.use('/hedgehogs', cafesRouter);
app.use('/reptiles', cafesRouter);

app.get('/', (req, res) => {
  res.render('home/index', {cafes: res.locals.cafes});
  console.log('hi')
});



app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `);
});
