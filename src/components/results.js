import React, {Component} from 'react';

class Results extends Component {
	constructor(props) {
		super(props);

		this.store = this.props.store;
	}

	votesInPercent(framework) {
		const angularCount = this.store.getState().angular || 0;
		const reactCount = this.store.getState().react || 0;
		const vuejsCount = this.store.getState().vuejs || 0;
		const totalCount = angularCount + reactCount + vuejsCount;

		if (totalCount === 0) {
			return 0;
		}

		switch (framework) {
			case 'ANGULAR':
				return ((angularCount / totalCount) * 100).toFixed(2) + '%';
			case 'REACT':
				return ((reactCount / totalCount) * 100).toFixed(2) + '%';
			case 'VUEJS':
				return ((vuejsCount / totalCount) * 100).toFixed(2) + '%';
			default:
				return 0;
		}
	}

	render() {
		return (
			<div>
				<span className="label label-danger">Angular: {this.votesInPercent('ANGULAR')}</span>
				<div className="progress progress-striped active">
					<div className="progress-bar progress-bar-danger" style={{width: this.votesInPercent('ANGULAR')}}>
					</div>
				</div>
				<span className="label label-info">React: {this.votesInPercent('REACT')}</span>
				<div className="progress progress-striped active">
					<div className="progress-bar progress-bar-info" style={{width: this.votesInPercent('REACT')}}>
					</div>
				</div>
				<span className="label label-success">Vue.js: {this.votesInPercent('VUEJS')}</span>
				<div className="progress progress-striped active">
					<div className="progress-bar progress-bar-success" style={{width: this.votesInPercent('VUEJS')}}>
					</div>
				</div>
			</div>
		)
	}

}

export default Results;