/*用户的数据库操作*/
var mongoose = require("mongoose");
// 链接数据库
var connection = mongoose.createConnection("mongodb://192.168.2.223:item_fileupload");
// 监听链接
connection.on("error",function(){
	console.log("connect error");
});
connection.once("open",function(){
	console.log("mongo working");
});

/*评论表*/
var commentShcema = new mongoose.Schema({
	"author":String,
	"text":String
});

var CommentModel = connection.model("Comment",commentShcema);

module.exports = {
	"CommentModel" : CommentModel
};
