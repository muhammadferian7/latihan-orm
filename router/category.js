const express = require('express')
const router = express.Router()
const { list, create, update, destroy } = require('../controller/categoryController.js')
const validate = require ('../middleware/validate.js')
const { createCategoryRules } = require('../validators/rule.js')

router.get('/list', list)
router.post('/create', validate(createCategoryRules), create)
router.put('/update', update)
router.delete('/destroy', destroy)

module.exports = router