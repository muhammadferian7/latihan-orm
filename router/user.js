const express = require('express')
const router = express.Router()
const { register, login, list, destroy } = require('../controller/userController.js')
const validate = require ('../middleware/validate.js')
const { registerRule } = require('../validators/rule.js')

router.get('/list', list)
router.post('/register', validate(registerRule), register)
router.post('/login', login)
router.delete('/delete/:id', destroy)

module.exports = router