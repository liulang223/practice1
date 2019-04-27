var User_model = require('../models/user_model.js');
exports.reg = function(req,res,next){
    res.render('reg')
}
exports.do_reg = function(req,res,next){
    var name = req.body.email;
    var pass = req.body.pwd;
    
    User_model.reg_data(name,pass,function(error,data){
        if(data.affectedRows == 1){
            res.redirect('/login');
        }
    })
}

exports.login = function(req,res,next){
    res.render('login');
}

exports.do_login = function(req,res,next){
    var name = req.body.email;
    var pass = req.body.pwd;
    User_model.sel_data(name,pass,function(error,data){
        console.log(data);
        
        if(data.length > 0){
            req.session = data[0];
            res.redirect('index',)
        }
    })
}