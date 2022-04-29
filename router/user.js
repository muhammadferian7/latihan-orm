const express = require('express')
const router = express.Router()
const { register, login } = require('../controller/userController.js')
const validate = require ('../middleware/validate.js')
const { registerRule } = require('../validators/rule.js')

router.post('/register', validate(registerRule), register)
router.post('/login', login)

module.exports = router