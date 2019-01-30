import React, {Component} from 'react';
import 'tachyons';
import './Card.css'

const Card = ({id, name, email}) => {
	return (
		<div className = "tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5 grow"> 
			<img src={`https://www.robohash.org/${id}?200x200`} alt = "N"/>
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
}

export default Card;