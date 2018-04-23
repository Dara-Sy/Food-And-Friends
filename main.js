const express = require('express');
const logger = require('morgan');
const axios = require('axios');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const cafesRouter = require('./routes/cafesRoutes');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cafesRouter);
app.use('/allcafes', cafesRouter);
app.use('/bunnies', cafesRouter);
app.use('/cats', cafesRouter);
app.use('/dogs', cafesRouter);
app.use('/hedgehogs', cafesRouter);
app.use('/reptiles', cafesRouter);
app.use('/:id', cafesRouter);
app.use('/new', cafesRouter);
// app.use('/onecafe', cafesRouter);


// app.get('/', (req, res) => {
//   res.render('home/index', {cafes: res.locals.cafes});
//   console.log('hi')
// });



app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `);
});
