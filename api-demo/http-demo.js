// let http = require('http');
// let url = require('url');

// function start(route) {
//     const server = http.createServer((req, res) => {
//         const pathname = url.parse(req.url).pathname;
//         console.log(`요청받은 경로: ${pathname}`);

//         res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });

//         let content = route(pathname); // 라우터를 통해 응답 가져오기
//         res.write(content);
//         res.end();
//     });

//     server.listen(8888, () => {
//         console.log('🚀 서버가 실행 중입니다: http://localhost:8888');
//     });
// }

// // `start` 함수를 외부에서 사용 가능하도록 export
// exports.start = start;
