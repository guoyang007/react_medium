import './components/common/index.js';

import 'core-js/fn/object/assign';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './stores/index.js';

import HomesIndex from './pages/homes/index.js';
import ArticlesShow from './pages/articles/show.js';
import Layout from './components/layout.js';

injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render((
	<Provider store={store()} >
		<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={HomesIndex} />
				
				<Route path="/homes" component={HomesIndex} />
				<Route path="/articles/:id" component={ArticlesShow} />
			</Route>
		</Router>
	</Provider>
), document.querySelector('.react-container'));

// repalce react-container
// document.querySelector('.react-container').replaceChild()
