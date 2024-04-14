const Router     = require('express')
const router     = new Router()
const controller = require('../controller/authController')
const {check}    = require('express-validator')

router.post('/registration', [
  check('username', 'Username not must to be empty').notEmpty(),
  check('password', 'Password length must to be bigger than 4 and less than 10 sybmols').isLength({min: 4, max: 10})
], controller.registration)
router.post('/login', controller.login)

module.exports = router;