const express = require('express');
const router = express.Router();

const indexController = require('../controllers/index');

router.get('/persons', indexController.index);

router.get('/judicial_records', indexController.getJudicialRecords);

router.get('/getScore', indexController.getScore);

router.get('/identificationTypes', indexController.getIdentificationTypes);

module.exports = router;
