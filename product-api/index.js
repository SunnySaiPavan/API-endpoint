const express = require('express');
const app = express();
app.use(express.json());


app.post('/total', (request, response) => {
  const { items } = request.body;

  if (items.constructor !== Array) {
    return response.status(400).json({ error: 'Invalid format. Expected an array.' });
  }

  let result = 0;

  
  for (const i of items) {
    const { price, quantity } = i;

    if (typeof price !== 'number' || typeof quantity !== 'number') {
      return response.status(400).json({ error: 'price and quantity should be numbers.' });
    }

    result = result + price * quantity;
  }

  response.json({ result });
});


app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
