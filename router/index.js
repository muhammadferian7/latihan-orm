const express = require('express')
const router = express.Router()
const categoryRouter = require('./category.js')
const userRouter = require('./user.js')

router.get('/check', (req, res) => res.send("App Up"))
router.use('/category', categoryRouter)
router.use('/user', userRouter)

module.exports = router