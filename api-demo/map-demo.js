const express = require('express')
const app = express()
app.listen(4000)

app.get('/:id', function (req, res) {

    let { id } = req.params
    id = parseInt(id)

    res.json(
        db.get(id)
    )
    if (db.get(id) == undefined) {
        res.json({
            message: "없는 상품입니다."
        })
    } else {
        product = db.get(id)
        product.id = id //Js 라서 가능한 정말 간단하게 id 추가하는 방법!

        res.json(product)
    
    }
})


let notebook = {
    productName: "notebook",
    price: 2000000
}

let chair = {
    productName: "chair",
    price: 2100000
}

let poster = {
    productName: "poster",
    price: 2200000
}



let db = new Map()
db.set(1, notebook) // 키로 밸류를 찾는 한 쌍 저장
db.set(2, chair)
db.set(3, poster)

// console.log(db)
// console.log(db.get(1))
// console.log(db.get(2))
// console.log(db.get(3))

//map, list 자료구조는 반드시 알아야 한다!