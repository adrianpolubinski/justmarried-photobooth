const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController');

router.get('/reservations/:year?/:month?/:accept?', apiController.reservations);

router.all('*', (req, res) => {
  res.status(404).send('<h1>Error resource not found</h1>');
});

module.exports = router;
