const express = require('express')
const router = express.Router()
const { list, create, update, destroy, find } = require('../controller/categoryController.js')
const validate = require ('../middleware/validate.js')
const { createCategoryRules } = require('../validators/rule.js')
const checkToken = require('../middleware/checkToken.js')

router.get('/list', checkToken, list)
router.post('/create', checkToken, validate(createCategoryRules), create)
router.put('/update', checkToken, update)
router.delete('/destroy/:id', checkToken, destroy)
router.get('/find/:id', checkToken, find)

module.exports = router