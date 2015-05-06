var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var models = require("./db/DBModels");

app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(path.join(__dirname, '')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.render("index.html");
});

var comments = [
	{"author":"chow","text":"aaa"},
	{"author":"best","text":"bbb"}
];
app.get("/comments",function(req,res){
	res.send(comments);
});
app.post("/comments",function(req,res){
	// var CommentModel = models.CommentModel;
	comments.push({
		"author" : req.body.author,
		"text" : req.body.text
	});

	res.send(comments);
});



app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
