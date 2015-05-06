define(["config"],function(config){
	/*配置*/
	requirejs.config(config);
	/*依赖*/
	requirejs(["react","comment"],function(React){
		React.render(
			React.createElement("h1", null, "Hello world!"),
			document.querySelector("#example")	
		);

		React.render(
			React.createElement(CommentBox, null),
			document.querySelector("#content")
		);
	});
		
});



