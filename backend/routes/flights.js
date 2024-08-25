const express = require('express');
const { getFlightData } = require('../controllers/flightController');

const router = express.Router();

router.get('/', getFlightData);

module.exports = router;
