const router = require('express').Router();
const userController = require('../../controllers/userController')


// this is the signup route
router.route('/signup')
  .get(userController.findAll)

module.exports = router