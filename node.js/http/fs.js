var fs = require('fs');
fs.readFile('../files/file.text','utf-8',function(err,data){
 if(err){
     console.log(error);
     
 }else{
     console.log(data);
     
 }
})