const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;  // PORT 대문자로 쓰는 게 일반적

// body-parser 설정
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));  

// API
app.get('/api/hello', (req, res) => {
  res.send({
    message: 'Hello Express!'
  });
});


// 서버 시작
app.listen(port, () => console.log(`Listening on port ${port}`));