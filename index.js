// npm init시 입력한 entry point. default : index.js

// express 
const express = require('express');
const app = express();

// 사용 포트 설정
const port = 3000;

// Root URL(/) 에 대한 요청에 "Hello world!"로 응답(response)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
