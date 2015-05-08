var fs = require('fs');
var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var ejs = require("ejs");

app.set('port', (process.env.PORT || 3000));
app.set('views', path.join(__dirname, 'views'));
//重新设置view engine，用html格式
app.set("view engine","html");
app.engine(".html",ejs.__express);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '')));

app.get('/', function(req, res) {
    res.render("index.html");
});

/*login demo begin*/
var users = [
	{"user" : "chow xiang" , "password" : "best"}
];

app.get("/login",function(req,res){
	res.render("login.html");
});

app.post("/login",function(req,res){
	var user = req.body.user;
	var password = req.body.password;

	for(var i=0;i<users.length;i++){
		user == users[i].user && password == users[i].password ? res.send({"msg" : "success"}) : void 0;
	}
	res.send({"msg" : "no user"})
});

/*login demo end*/

/*comment demo begin*/
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
/*comment demo end*/



app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
