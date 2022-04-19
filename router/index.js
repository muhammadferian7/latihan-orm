const express = require('express')
const router = express.Router()
const categoryRouter = require('./category.js')

router.get('/check', (req, res) => res.send("App Up"))
router.use('/category', categoryRouter)

module.exports = router