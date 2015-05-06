define(["react","marked","jquery"],function (React,marked,$){
	var Comment = React.createClass({displayName: "Comment",
		render: function(){
			var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
			return (
				React.createElement("div", {className: "comment"}, 
					React.createElement("h2", {className: "commentAuthor"}, 
						this.props.author
					), 
					React.createElement("span", {dangerouslySetInnerHTML: {__html: rawMarkup}})
				)
			);
		}
	});

	var CommentList = React.createClass({displayName: "CommentList",
		render: function(){
			var commentNodes = this.props.data.map(function(comment){
				return (
					React.createElement(Comment, {author: comment.author}, 
						comment.text
					)
				);
			});
			return (
				React.createElement("div", {className: "commentList"}, 
					commentNodes
				)
			);
		}
	});

	var CommentForm = React.createClass({displayName: "CommentForm",
		handleSubmit: function(e){
			e.preventDefault();
			var author = React.findDOMNode(this.refs.author).value;
			var text = React.findDOMNode(this.refs.text).value;
			this.props.handleCommentSubmit({});
			return author && text && (React.findDOMNode(this.refs.author).value = "") || (React.findDOMNode(this.refs.text).value = "");
		},
		render: function(){
			return (
				React.createElement("form", {className: "commentForm", onSubmit: this.handleSubmit}, 
					React.createElement("input", {placeholder: "your name", ref: "author"}), 
					React.createElement("input", {placeholder: "some thing", ref: "text"}), 
					React.createElement("input", {type: "submit", value: "post"})
				)
			);
		}
	});

	return {
		CommentBox : React.createClass({displayName: "CommentBox",
			loadCommentsFromServer: function(){
				$.ajax({
					url: this.props.url,
					dataType: "json",
					cache: false,
					success: function(data){
						this.setState({data: data});
					}.bind(this),
					error: function(xhr,status,err){
						console.error(this.props.url,status,err.toString());
					}.bind(this)
				});
			},
			handleCommentSubmit: function(comment){
				console.log(comment);
			},
			getInitialState : function(){
				return {data : []};
			},
			componentDidMount : function(){
				this.loadCommentsFromServer();
				setInterval(this.loadCommentsFromServer,this.props.poll);
			},
			render: function () {
				return  (
					React.createElement("div", {className: "commentBox"}, 
						React.createElement("h1", null, "Comment"), 
						React.createElement(CommentList, {data: this.state.data}), 
						React.createElement(CommentForm, {onCommentSubmit: this.handleCommentSubmit})
					)
				);
			}
		})
	}
});


