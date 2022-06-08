require('dotenv').config() // membaca file .env
const express = require('express') // inisialisasi variabel yang berisi express
const port = process.env.PORT || 3500 // declare port
const app = express() // inisiasi function express ke variable app
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./router')
const YAML = require('yamljs')
const swaggerUI = require('swagger-ui-express')
const apiDocs = YAML.load('./api-doc.yaml')

app.use(cors()) // menggunakan fungsi cors
app.use(express.urlencoded({ extended: true })) // untuk menerima request form-data dan urlencode form
app.use(bodyParser.json()) // untuk menangkan json req
app.use('/api', router)
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(apiDocs));

app.listen(port, () => {
    console.log(`server running at port ${port}`);
})