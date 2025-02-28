// const express = require('express');

// Instead of require, use import
import express from 'express';
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Route for GET request
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Route for POST request
app.post('/data', (req, res) => {
  console.log("latest data-->",req.body)
  res.send('Data received');
});

// Route for PUT request
app.put('/update', (req, res) => {
  res.send('Data updated');
});

// Route for DELETE request
app.delete('/delete', (req, res) => {
  res.send('Data deleted');
});

// Start the server
app.listen(3000, () => {
  console.log('Server running on port 3000');
});
