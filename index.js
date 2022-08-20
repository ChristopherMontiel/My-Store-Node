const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
  res.send('Hola mi server en express');
});

app.get('/nueva-ruta', (req, res) =>{
  res.send('Hola, soy una nueva ruta o endpoint');
});

app.get('/products', (req, res) =>{
  res.json([
    {
      name: 'Product 1',
      price: 1000
    },
    {
      name: 'Product 2',
      price: 1500
    }
  ]);
});

app.get('/products/:id', (req, res) =>{
  //const = req.params.id; //Una manera de hacerlo es esta
  //La otra manera mas limpia es uisando la destructuracion de ecmascript.
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 2',
    price: 1500
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId
  });
});

app.listen(port, () => {
  console.log('My port' + port);
});
