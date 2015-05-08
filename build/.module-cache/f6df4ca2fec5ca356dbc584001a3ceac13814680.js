define(["react","jquery"],function (React,$) {

	var UserInput = React.createClass({displayName: "UserInput",
		getInitialState : function(){
			return {"user" : "chow xiang"};
		},
		render : function(){
			return (
				React.createElement("input", {name: "user", value: this.props.value})
			);
		}
	});

	var PasswordInput = React.createClass({displayName: "PasswordInput",
		render : function(){
			return (
				React.createElement("input", {ref: "password", name: "password"})
			);
		}
	});

	var LoginForm = React.createClass({displayName: "LoginForm",
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
					console.log(r);
				},
				error : function(r){
					console.log(r);
				}
			});
		},
		render : function(){
			return (
				React.createElement("form", {onSubmit: this.checkLogin}, 
					React.createElement(UserInput, {value: this.state.user}), 
					React.createElement(PasswordInput, null), 
					React.createElement("input", {type: "submit", value: "确认"})
				)
			);
		}
	});

	return LoginForm;
});


