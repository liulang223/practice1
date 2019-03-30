var db = require('./db.js');
exports.insert_data = function(name,pass,callback) {
  var sql = 'insert into user(User,Password) values(?,?)';
  db.query(sql,[name,pass],callback);
}
//连接数据库
/*var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'mysql'
});
exports.insert_data = function(name,pass,callback) {
  pool.getConnection(function(err, connection) {
    if (err) throw err; // not connected!
   
    // Use the connection
    connection.query('SELECT * FROM user', function (error, results, fields) {
      // When done with the connection, release it.
      connection.release();
      callback(error,results);
      // Handle error after the release.
      if (error) throw error;
   
      // Don't use the connection here, it has been returned to the pool.
    });
  });
}*/