import React from 'react';

const seasonConfig = {
	winter: {
		message: "Time to go ice skating!",
		iconPic: 'snowflake'
	},
	summer: {
		message: "Time to head to the beach!",
		iconPic: 'sun'
	} 
}

const getSeason = (lat, month) => {
	if(month > 3 && month < 9)
		return lat > 0 ? 'summer' : 'winter';
	else
		return lat > 0 ? 'winter' : 'summer';
}

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const {message, iconPic} = seasonConfig[season]

	return (
		<div>
			<i className={`${iconPic} icon`}/>
			<h1>{message}</h1>
			<i className={`${iconPic} icon`}/>
		</div>
	);
}

export default SeasonDisplay;