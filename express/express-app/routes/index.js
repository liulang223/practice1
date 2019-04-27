var express = require('express');
var router = express.Router();//地址响应
var User = require('../controllers/user')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  //res.send() 解析字符串
  //原生的 writehead和end一样
});
router.get('/reg',User.reg);
router.post('/reg',User.do_reg);

router.post('/checkname',User.checkname);
router.post('/check',User.check);

router.get('/login',User.login);
router.post('/login',User.do_login);
module.exports = router;
