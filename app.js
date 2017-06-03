var express = require('express');
var path    = require("path");
var bodyParser = require("body-parser");
//routes 의 (name).js 파일 선언
var main = require('./routes/main');
var board = require('./routes/board');
var app = express();

//appRoot Path 전역변수 지정
global.appRoot = path.resolve(__dirname);

/**
 * 정적 파일이란?
 * HTML 에서 사용되는 .js 파일, css 파일, image 파일
 */
//서버에서 정적파일을 다루기 위해선, express.static() 메소드를 사용
app.use(express.static('public'));

//bodyParser : post방식 body 사용
app.use(bodyParser.urlencoded({extended:false}));

/**
 * app.get[post, etc...] (URL경로, 라우터의 콜백 메소드);
 * 해당 router 의 function으로 이동
 */
//메인
app.get('/', main.welcome);

//4단계 : 게시판
app.get('/board', board.showBoardList);

//서버 구동
app.listen(3000, function() {
  console.log('Connected 3000 port!');
});