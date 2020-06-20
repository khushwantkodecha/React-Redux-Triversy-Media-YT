import { FETCH_POSTS, NEW_POST } from '../actions/types';
import Axios from 'axios';

export const fetchPosts = () => (dispatch) => {
	console.log('fetching');
	Axios.get('https://jsonplaceholder.typicode.com/posts').then((res) =>
		dispatch({
			type    : FETCH_POSTS,
			payload : res.data
		})
	);
};

export const createPost = (postData) => (dispatch) => {
	console.log('abc');
	Axios({
		method : 'POST',
		url    : 'https://jsonplaceholder.typicode.com/posts',
		data   : postData
		// headers : {
		// 	'content-type' : 'application/json'
		// }
	}).then((res) =>
		dispatch({
			type    : NEW_POST,
			payload : res.data
		})
	);
};
