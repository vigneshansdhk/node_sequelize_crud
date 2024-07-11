const controller = require('../controllers/basecontroller');
const express = require('express');
const router = express.Router();

router.post('/createUser', controller.create)
router.get('/listUser', controller.getList)
router.post('/updateUser', controller.update)
router.get('/deleteUser', controller.delete)

module.exports = router;