const express = require('express');
const app = express();
const mysql = require('mysql');
const bodyParser = require('body-parser');

app.use(bodyParser.json({type:'application/json'}));
app.use(bodyParser.urlencoded({extended:true}));


const db = mysql.createConnection({
    host:'주소',
    port:'포트',
    user:'아이디',
    password:'비밀번호',
    database:'사용디비이름'
});

db.connect();

app.post('/checkKakao', function(req, res){
    console.log(req.body);
    console.log('check');
    var data = {
        kakaoCode: req.body.kakaoCode
    };
    var sql = `SELECT kakaoCode FROM userInfo WHERE kakaoCode = '${data.kakaoCode}'`;
    db.query(sql, data, (err, result)=>{
        if(err){
            throw err;
        }else{
            console.log(result);
            console.log('check2');
            res.send(result);
        }
    });
});


app.listen(리슨포트번호, ()=>{
    console.log('제발 돼라');
});
