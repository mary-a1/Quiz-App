const db = require('../connection');

const getAllQuizzes = function(options, limit = 10) {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return 'Database Query Results';
      // return data.rows;
    });
};

module.exports = { getAllQuizzes };

