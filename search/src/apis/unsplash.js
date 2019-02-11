import axios from 'axios';

export default axios.create(
		baseURL: 'https://www.unsplash.com/photos',
		headers: {
			Authentication: 'CLIENT-ID '
		}
	)