import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
	state = { term : '' }

	onSubmitChange = (e) => {
		e.preventDefault();
	}

	render() {
		return(
			<div className='ui segment'>
				<form className='ui form' onSubmit={this.onSubmitChange}>
					<div className='field'>
						<label style={{ fontSize: '1.5em', marginBottom: '12px' }}>Search Bar</label>
						<input type='text' value={this.state.term} 
						onChange={(e) => this.setState({ term: e.target.value})}/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;