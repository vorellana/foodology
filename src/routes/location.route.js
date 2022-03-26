const { getLocation } = require('../controllers/location.controller')
const { Router } = require('express');
const urlBase = '/api-foodology';
const morgan = require('morgan')
const router = Router();

// routes
router.get(urlBase + '/location', [morgan('combined') ], getLocation);
// router.post(urlBase + '/height', [morgan('combined') ], getHeight);


module.exports = router;