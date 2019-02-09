import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay.js';
import Spinner from './Spinner.js';

class App extends React.Component {
	state = { lat: null, errorMessage: ''}

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(position) => {this.setState({lat: position.coords.latitude})},
			(error) => {this.setState({errorMessage: "Error in Loading"})}
		);
	}

	renderContent() {
		if(this.state.lat)
			return <SeasonDisplay lat={this.state.lat}/>;
		else if(this.state.errorMessage)
			return <h1><div>Error Loading...</div></h1>;
		else
			return <Spinner message="Please allow the location popup!"/>;
	}

	render() {
		return (
			<div>
				{this.renderContent()}
			</div>
		);
	}
}

ReactDOM.render(<App/>, document.querySelector('#root'));