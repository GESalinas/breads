const express = require('express')
require('dotenv').config()

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>hello</h1>')
})

const PORT = process.env.PORT || 8080

app.listen(PORT, console.log(`listening on port: ${PORT}`))