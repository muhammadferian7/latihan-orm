const { body } = require('express-validator')

const createCategoryRules = [
    body('name').notEmpty().withMessage('name is required')
]

const registerRule = [
    body('email').isEmail().withMessage('email invalid').notEmpty().withMessage('email is required'),
    body('username').notEmpty().withMessage('username is required'),
    body('firstName').notEmpty().withMessage('firstName is required'),
    body('lastName').notEmpty().withMessage('lastName is required'),
    body('password').notEmpty().withMessage('password is required')
]

module.exports = { createCategoryRules, registerRule }