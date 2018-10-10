import React, {Component} from 'react';
import CardList from './CardList';
import './App.css';
import SearchBox from './SearchBox';
import 'tachyons';

class App extends Component {

	constructor() {
		super();
		this.state = {
			robots: [],
			searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(users => this.setState({robots: users}));
	}

	onSearchChange = (event) => {
		this.setState({searchField: event.target.value})
	}



	render() {
		const {robots, searchField} = this.state;
		const filtered = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchField.toLowerCase())
		});
		if(!robots.length){
			return (
				<h1 className="f1">Loading</h1>
			);
		}
		else{
			return (
				<div className="tc">
					<SearchBox search={this.onSearchChange} value = {filtered}/>
					
					<CardList className="tc" robots={filtered}/>
				</div>
			);	
		}
		
	}
}

export default App;