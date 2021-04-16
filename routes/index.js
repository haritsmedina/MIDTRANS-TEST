const router = require('express').Router()

const Controller = require('../controllers/controllerSnap')

router.get('/', Controller.transaction)

module.exports = router