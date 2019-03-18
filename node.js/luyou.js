var http = require('http');
var path = require('url');
var fs = require('fs');
http.createServer(function(req,res){
    if(path =='/'){
        fs.readFile('./files/file.html','utf-8',function(err,data){
             return data;
        })
    }else{
        fs.readFile('')
    }
  
})