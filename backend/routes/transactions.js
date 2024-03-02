const { addIncome } = require('../controllers/income');

const router = require('express').Router();



router.get('/add-income',addIncome)


module.exports = router;
