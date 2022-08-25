const express = require('express');
const router = express.Router();

const indexController = require('../controllers/indexController');

router.get('/', indexController.homepage);
router.post('/calendarTerm', indexController.calendarTerm);
router.post('/sendContactMessage', indexController.sendContactMessage);

router.all('*', (req, res) => {
  res.status(404).send('<h1>Error resource not found</h1>');
});

module.exports = router;
