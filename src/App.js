import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from "./actions";
import './App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	handleVote = (framework) => {
		switch (framework) {
			case 'ANGULAR':
				this.store.dispatch(voteAngular());
				break;
			case 'REACT':
				this.store.dispatch(voteReact());
				break;
			case 'VUEJS':
				this.store.dispatch(voteVuejs());
				break;
		}
	};

	render() {
    return (
			<div className="jumbotron text-center">
				<h2>What is your favorite front-end framework in 2017?</h2>
				<h4 className="guide">Click on the logos below to vote!</h4>
				<div className="row">
					<div className="col-xs-4">
						<img className="framework-icon" src="./assets/angular_logo.png" height="96" alt="Angular" onClick={() => this.handleVote('ANGULAR')} />
					</div>
					<div className="col-xs-4">
						<img className="framework-icon" src="./assets/react_logo.png" height="96" alt="React" onClick={() => this.handleVote('REACT')} />
					</div>
					<div className="col-xs-4">
						<img className="framework-icon" src="./assets/vuejs_logo.png" height="96" alt="Vuejs" onClick={() => this.handleVote('VUEJS')} />
					</div>
				</div>
			</div>
    );
  }
}

export default App;
