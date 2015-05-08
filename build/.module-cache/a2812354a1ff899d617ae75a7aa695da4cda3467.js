define(["config","require"],function(config){
	/*配置依赖*/
	requirejs.config(config);
	/*操作*/
	requirejs(["react","comment"],function(React,CommentBox){

		React.render(
			React.createElement("h1", null, "Hello world!"),
			document.querySelector("#example")	
		);

		React.render(
			React.createElement(CommentBox, {url: "/comments", poll: "2000"}),
			document.querySelector("#content")
		);

	});
});





