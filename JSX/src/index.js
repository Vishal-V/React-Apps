import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import Comment from './comment';
import Approval from './approval';

const App = () => {
	
	return (
		<div className="ui container comments">
			<Approval>
				<Comment author='sam' timeAgo='Today 4:00' cont='Nice bLog Post!' img={faker.image.avatar()}/>
			</Approval>
			<Approval>
				<Comment author='same' timeAgo='Today 5:55' cont='Enjoyable!' img={faker.image.avatar()}/>
			</Approval>
			<Approval>
				<Comment author='lol' timeAgo='Few secs ago' cont='Very Nice!' img={faker.image.avatar()}/>
			</Approval>
		</div>
	);
};

ReactDOM.render(<App/>, document.querySelector('#root'));