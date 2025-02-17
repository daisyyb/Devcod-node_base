const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.json({
        say : '안녕하세요'
    })
})

// app.get('/:nickname', function (req, res) {

//     const params = req.params

//     res.json({
//         channel : req.params.nickname
//     })
// })

app.get('/watch', function (req, res) {

    const q = req.query
    console.log(q) // -> {v : aa, t : cc} 
    
    //객체의 비 구조화 
    const {v, t} = req.query
    console.log(v)
    console.log(t)

    res.json(q)
})

app.get('/products/:n', function (req, res) {
    // console.log(req.params)
    // console.log(req.params.n)

    // if(req.params.n > 10){
    //     console.log("url 로 전달받은 숫자가 10보다 크네요!")
    // }
    res.json({
        num : req.params.n
    })

})



let book = {
    title : "node!",
    price : 20000,
    description : "this book is good"
}

app.get('/products/1', function(req, res){
    res.json(book)
})

app.listen(3000)