requirejs(["../config"],function () {
	// body...
});

React.render(
	React.createElement("h1", null, "Hello world!"),
	document.querySelector("#example")	
);

React.render(
	React.createElement(CommentBox, null),
	document.querySelector("#content")
);


