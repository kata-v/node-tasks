var express = require('express');

var app = express();

app.get('/hello', function(req, res){
    res.send('Hello World!');
});

app.get('/contact', function(req, res){
    res.send('This is a contact form. Kind of.');
});

app.get('/resume', function(req, res){
    res.send('This is a resume page. Thanks.');
});


app.get('/one(two)?three', function(req, res){
    res.send('Is there a two? I don-t care');
});

app.get('/one*three', function(req, res){
    res.send('Is there a two? It is fine that there is not.');
});

app.get('/one(two)+three', function(req, res){
    res.send('You can have as many twos as you want');
});


app.listen(8000, function(){
    console.log('Listening on port 8000');
});
