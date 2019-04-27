var db = require('./db');

exports.reg_data = function(name,pass,callback){
    var sql = 'insert into t_users (USER_ID,ACCOUNT,PASSWORD) value(null,?,?)';
    db.query(sql,[name,pass],callback); 
}
exports.sel_data = function(name,pass,callback){
    var sql = 'select * from t_users where ACCOUNT=? and PASSWORD = ?';
    db.query(sql,[name,pass],callback);
}