define(["react","comment"],function(React,comment){

	React.render(
		React.createElement("h1", null, "Hello world!"),
		document.querySelector("#example")	
	);

	React.render(
		React.createElement(comment.CommentBox, {url: "../json/comments.json"}),
		document.querySelector("#content")
	);
});



