import React from 'react';

const SearchBox = ({searchField, search}) => {
	return (
		<div>
			<h1>RoboFriends</h1>
			<div>
				<input className="tc bg-lightest-blue pa1 ma3" 
				type="search" 
				placeholder="Search"
				onChange={search}
				/>
			</div>
		</div>
	);
}
 export default SearchBox;