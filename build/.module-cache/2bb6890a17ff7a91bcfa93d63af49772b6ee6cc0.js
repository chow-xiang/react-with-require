define(["react","marked"],function (React,marked){
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
				React.createElement("div", {className: ""}
				)
			);
		}
	});

	var CommentForm = React.createClass({displayName: "CommentForm",
		render: function(){
			return (
				React.createElement("div", {className: "commentForm"}, 
					"Hello,this is comment form."
				)
			);
		}
	});

	return {
		CommentBox : React.createClass({displayName: "CommentBox",
			render: function () {
				return  (
					React.createElement("div", {className: "commentBox"}, 
						React.createElement("h1", null, "Comment"), 
						React.createElement(CommentList, {data: this.props.data}), 
						React.createElement(CommentForm, null)
					)
				);
			}
		})
	}
});


