const express = require('express');
const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

app.get('/item', (req, res) => {
  res.send('Fetching item');
});

app.post('/item', (req, res) => {
  const newItem = req.body;
  res.send(`New item added: ${JSON.stringify(newItem)}`);
});

app.put('/item/:id', (req, res) => {
  const itemId = req.params.id;
  const updatedItem = req.body;
  res.send(`Item ${itemId} updated with data: ${JSON.stringify(updatedItem)}`);
});

app.delete('/item/:id', (req, res) => {
  const itemId = req.params.id;
  res.send(`Item ${itemId} deleted`);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
