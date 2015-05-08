define(["config","require"],function(config){
	/*配置依赖*/
	requirejs.config(config);
	/*操作*/
	requirejs(["react","comment"],function(React,CommentBox){

		React.render(
			<h1>Hello world!</h1>,
			document.querySelector("#example")	
		);

		React.render(
			<CommentBox url="/comments" poll="2000"/>,
			document.querySelector("#content")
		);

	});
});





