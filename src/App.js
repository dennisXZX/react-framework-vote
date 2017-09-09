import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from "./actions";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	handleVoteAngular = () => {
		this.store.dispatch(voteAngular());
	};

	handleVoteReact = () => {
		this.store.dispatch(voteReact());
	};

	handleVoteVuejs = () => {
		this.store.dispatch(voteVuejs());
	};

	render() {
    return (
			<div>
				<div className="jumbotron text-center">
					<h2>What is your favorite front-end framework in 2017?</h2>
					<h4>Click on the logos below to vote!</h4>
					<div className="row">
						<div className="col-xs-4">
							<img src="./angular_logo.png" height="96" alt="Angular" onClick={this.handleVoteAngular} />
						</div>
						<div className="col-xs-4">
							<img src="./react_logo.png" height="96" alt="React" onClick={this.handleVoteReact} />
						</div>
						<div className="col-xs-4">
							<img src="./vuejs_logo.png" height="96" alt="Vuejs" onClick={this.handleVoteVuejs} />
						</div>
					</div>
				</div>
			</div>
    );
  }
}

export default App;
