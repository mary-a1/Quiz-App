const db = require('../connection');


const addUser = (user) => {
  const queryString =`
  INSERT INTO users (name, email, password)
  VALUES ($1, $2, $3)
  RETURNING *`;

  const params = [user.name, user.email, user.password];

  return db.query(queryString, params)
  .then((result)=> {
    // console.log(result.rows[0]);
    if (result.rows[0]) {
      return result.rows[0];
    } else {
      return null;
    }
  })

}
module.exports = {addUser};
