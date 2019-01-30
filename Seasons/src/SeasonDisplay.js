import React from 'react';

const seasondisplay = {
	winter: {
		message: "Time to go ice skating!",
		iconPic: 'snowflake'
	},
	summer: {
		message: "Time to head to the beach!",
		iconPic: 'sun'
	} 
}

const SeasonDisplay = (props) => {
	return (
		<div>Latitude: {props.lat}</div>
	);
}

export default SeasonDisplay;