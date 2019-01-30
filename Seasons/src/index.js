import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
// import Spinner from './Spinner.js';

class App extends React.Component {
	state = { lat: null, errorMessage: ''}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {console.log(position.coords.latitude)},
			(error) => {this.setState({errorMessage: "Error in Loading"})}
		);
	}

	render() {
		return (
			<SeasonDisplay/>	
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));