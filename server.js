var express = require('express');
var mongoose= require('mongoose');
var multer=require('multer');
var app = express();
/* At firt I created a folder to upload each file 'uploads/', but it consumed memory in the server. 
SO thanks to gorkahernandez web page I knew how to change it to a memory storage just to hadle 
the data. In that tutorial i learn too how to hadle the client side and comunicate it with server side*/

var upload=multer({storage:storage});
var storage=multer.memoryStorage();


var PORT= process.env.PORT || 3000;

app.use('/', express.static('views'));

app.post('/upload', upload.single('data'),function (req, res){
if (req.file){
    res.status(200).json({
        size:req.file.size
    });
}else{
    res.statusCode(500).json({error: 'no file provided'});
}
});

app.listen(PORT, function(){
    console.log('App listen on port:'+ PORT);
});


