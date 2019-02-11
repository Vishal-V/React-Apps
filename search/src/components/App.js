import React from 'react';
import RaectDOM from 'react-dom';
import SearchBar from './SearchBar';

class App extends React.Component {
	
	onSubmitSearch = (term) => {
		console.log('Values!');
	}
	
	render() {
		return(
			<div className='ui container' style={{ marginTop: 15 }}>
				<SearchBar onSubmit={this.onSubmitSearch}/>
			</div>
		);	
	}
}

export default App;