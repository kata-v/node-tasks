var express = require("express");

var app = express();
// var bodyParser = require('bodyParser');

const http = require("http");

// app.get('/hello', function(req, res){
//     res.send('Hello World!');
// });

// app.get('/contact', function(req, res){
//     res.send('This is a contact form. Kind of.');
// });

// app.get('/resume', function(req, res){
//     res.send('This is a resume page. Thanks.');
// });

// app.get('/one(two)?three', function(req, res){
//     res.send('Is there a two? I don-t care');
// });

// app.get('/one*three', function(req, res){
//     res.send('Is there a two? It is fine that there is not.');
// });

// app.get('/one(two)+three', function(req, res){
//     res.send('You can have as many twos as you want');
// });

// app.use(bodyParser.urlencoded({ extended: true}));
// app.use(bodyParser.json());

app.get("/helsinki-events", function(req, res) {
  http
    .get("http://open-api.myhelsinki.fi/v1/activities/", resp => {
      let data = "";
      // A chunk of data has been recieved.
      resp.on("data", chunk => {
        data += chunk;
      });
      // The whole response has been received. Print out the result.
      resp.on("end", () => {
        data = JSON.parse(data);
        res.send(data);
        res.end();
      });
    })
    .on("error", err => {
      console.log("Error: " + err.message);
      res.end();
    });
});

app.get("/helsinki-events/fi", function(req, res) {
  http
    .get(
      "http://open-api.myhelsinki.fi/v1/activities/?language_filter=fi",
      resp => {
        let data = "";
        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          data = JSON.parse(data);
          res.send(data);
          res.end();
        });
      }
    )
    .on("error", err => {
      console.log("Error: " + err.message);
      res.end();
    });
});

app.get("/helsinki-events/en", function(req, res) {
  http
    .get(
      "http://open-api.myhelsinki.fi/v1/activities/?language_filter=en",
      resp => {
        let data = "";
        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          data = JSON.parse(data);
          res.send(data);
          res.end();
        });
      }
    )
    .on("error", err => {
      console.log("Error: " + err.message);
      res.end();
    });
});

app.get("/helsinki-events/sv", function(req, res) {
  http
    .get(
      "http://open-api.myhelsinki.fi/v1/activities/?language_filter=sv",
      resp => {
        let data = "";
        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          data = JSON.parse(data);
          res.send(data);
          res.end();
        });
      }
    )
    .on("error", err => {
      console.log("Error: " + err.message);
      res.end();
    });
});

app.get("/helsinki-events/zh", function(req, res) {
  http
    .get(
      "http://open-api.myhelsinki.fi/v1/activities/?language_filter=zh",
      resp => {
        let data = "";
        // A chunk of data has been recieved.
        resp.on("data", chunk => {
          data += chunk;
        });
        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          data = JSON.parse(data);
          res.send(data);
          res.end();
        });
      }
    )
    .on("error", err => {
      console.log("Error: " + err.message);
      res.end();
    });
});
// app.get('/', function(req, res){

//     res.sendFile(__dirname + '/views/index.html');
// });

// console.log('the value of dirname is:' + __dirname);

// app.get('/resume/download', function(req, res){
//     res.download(__dirname + '/public/cv.pdf');

// });

// app.get('*', function(req, res){

//     res.status(404).sendFile(__dirname + '/views/404.html')
// })

app.listen(8000, function() {
  console.log(
    "You are listening on port 8000 and its going to be a hell of a day"
  );
});
