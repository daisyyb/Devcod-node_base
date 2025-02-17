const express = require('express');
const app = express();

app.use(express.json()); // JSON 데이터를 파싱할 수 있도록 위치 조정

app.listen(4000, () => console.log("서버 실행 중: http://localhost:4000"));

// 데이터 저장소
let youtuber3 = {
    channelTilte: "태오",
    sub: "54만명",
    videoNum: "726"
};

var db = new Map();
let id = 1;

db.set(id++, youtuber3);

// GET 요청: 특정 ID의 유튜버 정보 가져오기
app.get('/yout', function (req, res) {
    console.log("요청 들어옴: /yout");
    res.json({
        message: "text"
    })
})
app.get('/youtuber/:id', function (req, res) {
    let { id } = req.params;
    id = parseInt(id);

    if (!db.has(id)) {
        return res.status(404).json({ message: "해당 ID의 유튜버 정보가 없습니다." });
    }

    res.json(db.get(id));
});

// POST 요청: 새로운 유튜버 등록
app.post('/youtuber', (req, res) => {
    console.log(req.body);

    db.set(id++, req.body);

    res.json({
        message: `${db.get(id - 1).channelTilte} 님의 유튜브를 응원합니다!`,
        data: req.body
    });
});
