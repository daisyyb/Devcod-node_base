const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json({
        say : '안녕하세요'
    })
})



app.listen(3000)