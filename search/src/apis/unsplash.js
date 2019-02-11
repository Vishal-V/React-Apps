import axios from 'axios';

export default axios.create({
		baseURL: 'https://api.unsplash.com/',
		headers: {
			Authorization: 'Client-ID e6bff24741f95f5d6b8c908652f7892b8c381a6e936348e8013814bef19d25b0'
		}
	}
);