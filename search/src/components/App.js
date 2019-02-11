import React from 'react';
import SearchBar from './SearchBar';
import unsplash from '../apis/unsplash';
import ImageList from './ImageList'

class App extends React.Component {

	state = { img : [] }
	
	onSubmitSearch = async (term) => {
		const response = await unsplash.get('search/photos',
			{
				params: { query: term }
			}
		);

		this.setState({ img: response.data.results });
	}

	render() {
		return(
			<div className='ui container' style={{ marginTop: 15 }}>
				<SearchBar onSubmit={this.onSubmitSearch}/>
				<ImageList img={this.state.img}/>
			</div>
		);	
	}
}

export default App;