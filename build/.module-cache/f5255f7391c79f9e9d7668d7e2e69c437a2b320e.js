define(["react","comment"],function(React,comment){

	React.render(
		React.createElement("h1", null, "Hello world!"),
		document.querySelector("#example")	
	);

	React.render(
		React.createElement(comment.CommentBox, {url: "../json/comments.json", poll: "2000"}),
		document.querySelector("#content")
	);
});



