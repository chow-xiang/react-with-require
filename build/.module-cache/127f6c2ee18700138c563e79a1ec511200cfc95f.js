define(["react"],function (React){
		return {
			Comment : React.createClass({displayName: "Comment",
				render: function(){
					return (
						React.createElement("div", {className: "comment"}, 
							React.createElement("h2", {className: "commentAuthor"}, 
								this.props.author
							), 
							this.props.children
						)
					);
				}
			}),

			CommentList : React.createClass({displayName: "CommentList",
				render: function(){
					return (
						React.createElement("div", {className: "commentList"}, 
							React.createElement(Comment, {author: "Chow"}, "Hello,Best!"), 
							React.createElement(Comment, {author: "C"}, "Hello,Best!!")
						)
					);
				}
			}),

			CommentForm : React.createClass({displayName: "CommentForm",
				render: function(){
					return (
						React.createElement("div", {className: "commentForm"}, 
							"Hello,this is comment form."
						)
					);
				}
			}),


			CommentBox : React.createClass({displayName: "CommentBox",
				render: function () {
					return  (
						React.createElement("div", {className: "commentBox"}, 
							React.createElement("h1", null, "Comment"), 
							React.createElement(CommentList, null), 
							React.createElement(CommentForm, null)
						)
					);
				}
			})
		}
	}
);


