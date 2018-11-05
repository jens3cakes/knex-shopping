const express = require('express');
const app = express();
const router = express.Router();
const db = require('../db/knex');

router.get('/', (req, res)=> {
  db.raw('SELECT * FROM products')
  .then((products) => {
console.log(products);
    res.json(products.rows);
  })
  .catch((err)=>{
    console.error('Product not found');
  });
});

router.post('/', (req, res)=>{
  const data = req.body;
  //const {username, email} = req.body; interchangable with line17
  const optionsArray = [data.title, data.description, data.inventory, data.price];
  console.log(optionsArray);
  db.raw('INSERT INTO products (title, description, inventory, price) VALUES (?, ?, ?, ?) RETURNING *', optionsArray)
  .then((newProduct)=>{
  if(!newProduct.rowCount){
    res.status(400).send('Failed to create new user');
  }
  res.json(newProduct.rows[0]);
  })
  .catch((err)=>{
    console.error(err);
    res.status(400).send('Something went wrong!');
  });
  });
  
















module.exports = router;