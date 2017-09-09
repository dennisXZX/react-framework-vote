import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import myAppReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';

// import CSS
import './index.css';

// import components
import App from './App';
import Results from './components/results';

// create a store for the app, passing in a reducer
let store = createStore(myAppReducer);

function render() {
	ReactDOM.render(
		<div className="container">
			<App store={store} />
			<hr />
			<Results store={store} />
		</div>,
		document.getElementById('root')
	);
};

// subscribe to render function,
// so each time the state changes, render function is invoked.
store.subscribe(render);

// initialize the app
render();

registerServiceWorker();
