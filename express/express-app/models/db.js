var mysql = require('mysql');
var pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'localhost',
  user            : 'root',
  password        : '',
  database        : 'mysql'
});

exports.query = function(sql,params,callback) {
    pool.getConnection(function(err, connection) {
        if (err) throw err; 
       
        connection.query(sql,params, function (error, results, fields) {
          
          connection.release();
          callback(error,results);
         
          if (error) throw error;
            })
    })
}