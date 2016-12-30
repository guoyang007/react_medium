import './components/common/index.js';

import 'core-js/fn/object/assign';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './stores/index.js';
import Layout from './components/layout.js';
import Home  from './pages/homes/index.js';
import LoginIndex from './pages/login/login.js';

injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render((
	<Provider store={store()} >
		<Router history={hashHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home} />
				<Route path="/signup" component={LoginIndex} />
				<Route path="/homes" component={Home} />
				<Route path="/article/:id" getComponent={(location, callback) => {
			      require.ensure([], (require) => {
			        callback(null, require('./pages/articles/show.js').default);
			      },'show');
			    }} />
			</Route>
		</Router>
	</Provider>
), document.querySelector('.react-container'));

// repalce react-container
// document.querySelector('.react-container').replaceChild()
