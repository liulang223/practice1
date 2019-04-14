var User_model = require('../models/user_model.js');
exports.reg = function(req,res,next) {

    res.render('reg');

}
exports.do_reg = function(req,res,next) {

    var name = req.body.uname;
    var pass = req.body.pass;
    // console.log(name,pass);
    User_model.insert_data(name,pass,function(error,data) {
        // console.log(data);
        if(data,affectedRows == 1) {
            res.redirect('/login');
        }
    })

}

exports.login = function (req,res,next) {
    res.reder('reg');
}

exports.do_login = function (req,res,next) {

}