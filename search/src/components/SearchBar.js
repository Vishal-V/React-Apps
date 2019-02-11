import React from 'react';
import ReactDOM from 'react-dom';

class SearchBar extends React.Component {
	render() {
		return(
			<div className='ui segment'>
				<form className='ui form'>
					<div className='field'>
						<label style={{ fontSize: '1.5em', marginBottom: '12px' }}>Search Bar</label>
						<input type='text'/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;