define(["react","comment"],function(React,comment){
	var data = [
		{author:"chow",text:"aaa"},
		{author:"best",text:"bbb"}
	];

	React.render(
		React.createElement("h1", null, "Hello world!"),
		document.querySelector("#example")	
	);

	React.render(
		React.createElement(comment.CommentBox, {data: data}),
		document.querySelector("#content")
	);
});



