import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
	componentWillMount() {
		this.props.fetchPosts();
	}

	render() {
		const postDiv = this.props.posts.map((item) => (
			<div key={item.id}>
				<h3>{item.title}</h3>
				<p>{item.body}</p>
			</div>
		));
		return <div>{postDiv}</div>;
	}
}

const mapStateToProps = (state) => ({
	posts : state.posts.items
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
