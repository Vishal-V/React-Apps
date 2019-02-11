import axios from 'axios';

export default axios.create({
		baseURL: 'https://www.unsplash.com/photos',
		headers: {
			Authentication: 'CLIENT-ID 394dbb781cff1be176b6b1d5b642eef28ed68033bca1c31a0047ca92affd1313'
		}
	}
);