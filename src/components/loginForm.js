define(["react","jquery"],function (React,$) {

	var UserInput = React.createClass({
		getInitialState : function(){
			return {"user" : "chow xiang"};
		},
		render : function(){
			return (
				<input name="user" value={this.props.value}/>
			);
		}
	});

	var PasswordInput = React.createClass({
		render : function(){
			return (
				<input name="password"/>
			);
		}
	});

	var LoginForm = React.createClass({
		getInitialState : function(){
			return {"user" : "chow xiang"};
		},
		checkLogin : function(event){
			event.preventDefault();
			$.ajax({
				url: this.props.url,
				type: "post",
				data: {
					"user" : React.findDOMNode(this.refs.user).value,
					"password" : React.findDOMNode(this.refs.password).value,
				},
				success : function(r){
					console.log(r.msg);
				},
				error : function(r){
					console.log(r);
				}
			});
		},
		render : function(){
			return (
				<form onSubmit={this.checkLogin}>
					<UserInput value={this.state.user} ref="user"/>
					<PasswordInput ref="password" />
					<input type="submit" value="确认"/>
				</form>
			);
		}
	});

	return LoginForm;
});


