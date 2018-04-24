// Connect and bring in the express library and other needed libraries

const express = require('express');
const logger = require('morgan');
const axios = require('axios');
const path = require('path');
const methodOverride = require('method-override');

// this starts up express
const app = express();
const bodyParser = require('body-parser');

// create a PORT variable that checks the process.env or defaults to 3000
const PORT = process.env.PORT || 3000;

const cafesRouter = require('./routes/cafesRoutes');

// this will help to render EJS files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// this will set up logging
app.use(logger('dev'));
// body parser is necessary for updating data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));
app.use(express.static(path.join(__dirname, 'public')));

// create a GET request handler for cafes
app.use('/cafes/', cafesRouter);
app.use('/cafes/allcafes', cafesRouter);
app.use('/cafes/:id', cafesRouter);


app.get('/', (req, res) => {
  res.render('home/index', { cafes: res.locals.cafes });
  console.log('hi');
});

// this will log the message to show that port is running

app.listen(PORT, () => {
  console.log(`listening on port ${PORT} `);
});
