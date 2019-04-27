var Blog_model = require('../models/blog_model.js');

exports.index = function(req,res,next){
    //把所有blog查出来
    Blog_model.sel_blogs(function(error,data){
        // console.log(data);
        res.render('index_logined',{
            'sess':req.session,
            'blogs':data,
        })
    })
}
exports.updata = function(req,res,next){
    var bid = req.params.name;
    var bid = req.query.id;
    console.log(bid);
    
}
exports.add = function(req,res,next){
    res.render('newBlog');
}