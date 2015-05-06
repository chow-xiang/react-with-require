define(["react","comment"],function(React,comment){

	React.render(
		<h1>Hello world!</h1>,
		document.querySelector("#example")	
	);

	React.render(
		<comment.CommentBox url="/comments" poll="2000"/>,
		document.querySelector("#content")
	);

});



