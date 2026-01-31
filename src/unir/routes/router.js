var express = require('express');
var router = express.Router();
const controller = require('../controllers/gretting');
const controllerUser = require('../controllers/userController');
const validations= require('../validator/userValidation');



router.get('/gretting', controller.getGretting);

router.get('/user/:username',validations.userNameValidation,controllerUser.getUser)
router.post('/user',validations.userValidation,controllerUser.addUser)
module.exports = router;