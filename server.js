// load .env data into process.env
require('dotenv').config();

// Web server config
const sassMiddleware = require('./lib/sass-middleware');
const express = require('express');
const morgan = require('morgan');
const cookieSession = require('cookie-session');


const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'ejs');

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(
  '/styles',
  sassMiddleware({
    source: __dirname + '/styles',
    destination: __dirname + '/public/styles',
    isSass: false, // false => scss, true => sass
  })
);
app.use(express.static('public'));

app.use(cookieSession({
  name: 'session',
  keys: ['key1'],
}));

// Separated Routes for each Resource
// Note: Feel free to replace the example routes below with your own
const searchRoutes = require('./routes/search');
const createRoutes = require('./routes/create-quiz');
const loginRoutes = require('./routes/login');
const registerRoutes = require('./routes/register');
const takeQuizRoutes = require('./routes/quiz-id');
const quizzesRoutes = require('./routes/quizzes');
const homePageRoutes = require('./routes/index');
const logoutRoutes = require('./routes/logout');
const allResultsRoutes = require('./routes/allresults');
const editQuizRoutes = require('./routes/edit-quiz');
const myResultsRoutes = require('./routes/myresults');



// Mount all resource routes
// Note: Feel free to replace the example routes below with your own
// Note: Endpoints that return data (eg. JSON) usually start with `/api`
app.use('/search', searchRoutes);
app.use('/new', createRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/quiz', takeQuizRoutes);
app.use('/myquizzes', quizzesRoutes);
app.use('/', homePageRoutes);
app.use('/logout', logoutRoutes);
app.use('/allresults', allResultsRoutes);
app.use('/edit', editQuizRoutes);
app.use('/myresults', myResultsRoutes);




app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
