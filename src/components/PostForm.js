import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';

class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title : '',
			body  : ''
		};
	}

	onChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		const payload = {
			title : this.state.title,
			body  : this.state.body
		};
		this.props.createPost(payload);
	};
	render() {
		return (
			<div>
				<h4>Add Post</h4>
				<form onSubmit={this.onSubmit}>
					<div>
						<label>Titie</label>
						<br />
						<input type="text" name="title" onChange={this.onChange} />
					</div>
					<div>
						<label>Body</label>
						<br />
						<input type="text" name="body" onChange={(e) => this.onChange(e)} />
					</div>
					<div>
						<button type="submit">Submit</button>
					</div>
				</form>
			</div>
		);
	}
}

export default connect(null, { createPost })(PostForm);
