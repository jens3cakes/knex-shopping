const express = require('express');
const db = require('../db/knex');
const router = express.Router();




router.get('/cart', (req, res)=> {
  db.raw('SELECT * FROM cart')
  .then((cart) => {
console.log(cart)
    res.json(cart.rows)
  })
  .catch((err)=>{
    console.error(err);
  });
});



router.post('/cart', (req, res)=>{
  const data = req.body;
  //const {username, email} = req.body; interchangable with line17
  const optionsArray = [data.users_id, data.products_id]
  console.log(optionsArray)
  db.raw('INSERT INTO cart (users_id, products_id) VALUES (?, ?) RETURNING *', optionsArray)
  .then((newCart)=>{
  if(!newCart.rowCount){
    res.status(400).send('Failed to create new cart');
  }
  res.json(newCart.rows[0]);
  })
  .catch((err)=>{
    console.error(err);
    res.status(400).send('Something went wrong!');
  });
  });
  

















module.exports = router;