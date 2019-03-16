var http = require('http');//require 赋值引入
http.createServer(function(req,res){//request response  请求
    res.write('<h1>Hello World</h1>');
    res.end('<h1>Node.js</h1>');
}).listen('3000')
console.log('3000');
