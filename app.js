var express = require('express');
var app = express();
var path =require('path');
console.log(__dirname);

app.use('/images',express.static(path.join(__dirname+ '/App/images')));
app.use('/css',express.static(path.join(__dirname+ '/App/css')));
app.use('/fonts',express.static(path.join(__dirname+ '/App/fonts')));
app.use('/js',express.static(path.join(__dirname+ '/App/js')));


app.get('/', function(req, res){
    //res.send("Hello saurabh!");
    res.sendfile(path.join(__dirname + '/App/index.html'));
});

app.listen(8000,function(){
    console.log('Server is listening now');
});