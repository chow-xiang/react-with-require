define(["react","marked","jquery"],function (React,marked,$){

	var CommentTitle = React.createClass({
		render : function(){
			return (
				<h1>Comment</h1>
			);
		}
	});

	var Comment = React.createClass({
		render: function(){
			var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
			return (
				<div className="comment">
					<h2 className="commentAuthor">
						{this.props.author}
					</h2>
					<span dangerouslySetInnerHTML={{__html: rawMarkup}} />
				</div>
			);
		}
	});

	var CommentList = React.createClass({
		render: function(){
			var commentNodes = this.props.data.map(function(comment){
				return (
					<Comment author={comment.author}>
						{comment.text}
					</Comment>
				);
			});
			return (
				<div className="commentList">
					{commentNodes}
				</div>
			);
		}
	});

	var CommentForm = React.createClass({
		handleSubmit: function(e){
			e.preventDefault();
			var author = React.findDOMNode(this.refs.author).value;
			var text = React.findDOMNode(this.refs.text).value;
			this.props.onCommentSubmit({"author": author,"text": text});
			return author && text && 
			/*清除*/
			(React.findDOMNode(this.refs.author).value = "") || (React.findDOMNode(this.refs.text).value = "");
		},
		render: function(){
			return (
				<form className="commentForm" onSubmit={this.handleSubmit}>
					<input placeholder="your name" ref="author" />
					<input placeholder="some thing" ref="text" />
					<input type="submit" value="post" />
				</form>
			);
		}
	});

	var CommentBox = React.createClass({
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
			/*最优化*/
			var comments = this.state.data;
		    var newComments = comments.concat([comment]);
		    this.setState({data: newComments});
		    /*提交数据*/
			$.ajax({
				url: this.props.url,
				dataType: "json",
				type: "post",
				data: comment,
				success: function(data){
					this.setState({data: data});
				}.bind(this),
				error: function(xhr,status,err){
					console.error(this.props.url,status,err.toString());
				}.bind(this)
			});
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
				<div className="commentBox">
					<CommentTitle />
					<CommentList data={this.state.data}/>
					<CommentForm onCommentSubmit={this.handleCommentSubmit}/>
				</div>
			);
		}
	});

	return CommentBox;
});


