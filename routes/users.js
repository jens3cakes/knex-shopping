const express = require('express');
const app = express();
const router = express.Router();
const db = require('../db/knex');

router.get('/', (req, res)=> {
  db.raw('SELECT * FROM users')
  .then((users) => {
console.log(users)
    res.json(users.rows)
  })
  .catch((err)=>{
    console.error('User not found');
  });
});



router.post('/', (req, res)=>{
  console.log('hello')
  const data = req.body;
  //const {username, email} = req.body; interchangable with line17
  const optionsArray = [data.email, data.password, data.created_at, data.updated_at]
  console.log(optionsArray)
  db.raw('INSERT INTO users (email, password, created_at, updated_at) VALUES (?, ?, ?, ?) RETURNING *', optionsArray)
  .then((newUser)=>{
  if(!newUser.rowCount){
    res.status(400).send('Failed to create new user');
  }
  res.json(newUser.rows[0]);
  })
  .catch((err)=>{
    console.error(err);
    res.status(400).send('Something went wrong!');
  });
  });
  





module.exports = router;
