const express = require('express');
require('dotenv').config();
const cors = require('cors');

const { userTestimonials, cities, doctors } = require('./data/data');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.get('/', (req, res) => {
  res.send('Mock API!');
});

app.get('/cities', (req, res) => {
  res.json(cities);
});

app.get('/testimonials', (req, res) => {
  res.json(userTestimonials);
});

app.get('/doctors', (req, res) => {
  res.json(doctors);
});

app.listen(PORT, () => {
  console.log(`Mock app listening on port ${PORT}`);
});
