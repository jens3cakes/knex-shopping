require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const cartRouter = require('./routes/cart'); 
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/cart', cartRouter);


//app.get('/', (req,res)=>{
  //res.send('smoke test')
//});











app.listen(PORT, (req, res)=>{
  console.log(`Server is listening on ${PORT}`);
})

