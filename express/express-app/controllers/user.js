var User_model = require('../models/user_model.js');
const crypto = require('crypto');

exports.checkname = function(req,res,next){
    var name = req.body.username;
   User_model.check_name(name,function(error,data){ 
      if(data.length > 0){
          res.send('success');
      }
   })
}

exports.check = function(req,res,next){
    var password = req.boy.password;
    //发送httppost请求
}

exports.reg = function(req,res,next) {

    res.render('reg');

}
exports.do_reg = function(req,res,next) {

    var name = req.body.uname;
    var pass = req.body.pass;
    var mpass = xmd5(pass);
    
    User_model.insert_data(name,pass,function(error,data) {
        // console.log(data);
        if(data.affectedRows == 1) {
            res.redirect('/login');
        }
    })

}

exports.login = function (req,res,next) {
    res.render('login');
}

exports.do_login = function (req,res,next) {
    var name = req.body.uname;
    var pass = req.body.pass; 
    User_model.check_login(name,pass,function(error,data){
     if(data.length > 0){
        req.session = data[0];
        res.render('index',{
            'sess': req.session,
            'title': 'moon'
        })
     }
     })
}

function xmd5(str){
    const hash = crypto.createHash('md5');
    hash.update(str);
     var md5str = hash.digest('hex');
     return md5str;
  }
  