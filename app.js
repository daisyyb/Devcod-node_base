const express = require('express')
const app = express()
const port = 1234

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use(express.json())
app.post('/test', (req, res) => {
  //body 에 숨겨진 데이터를 화면에 뿌리자
  console.log(req.body)

  res.send(req.body)
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})