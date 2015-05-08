define(["config","require"],function(config){
	/*配置依赖*/
	requirejs.config(config);
	/*操作*/
	requirejs(["react","loginForm"],function(React,LoginForm){
		React.render(
			<LoginForm url="/login"/>,
			document.querySelector("#loginForm")
		);
	});
});





