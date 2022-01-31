const router = require('express').Router();
const userController = require('../../controllers/userController')


// this is the signup route
router.route('/signup')
  .post(userController.create)

module.exports = router