const express = require('express')
const router = express.Router()
const { list, create, update, destroy, find } = require('../controller/categoryController.js')
const validate = require ('../middleware/validate.js')
const { createCategoryRules } = require('../validators/rule.js')
const checkToken = require('../middleware/checkToken.js')
const checkRole = require('../middleware/checkRole.js')

router.get('/list', list)
router.post('/create', create)
router.put('/update', update)
router.delete('/destroy/:id', destroy)
router.get('/find/:id', find)

module.exports = router