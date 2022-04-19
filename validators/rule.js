const { body } = require('express-validator')

const createCategoryRules = [
    body('name').notEmpty().withMessage('name is required')
]

module.exports = { createCategoryRules }