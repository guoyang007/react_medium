import './components/common/index.js';

import 'core-js/fn/object/assign';
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import store from './stores/index.js';
import Layout from './components/layout.js';
import Home  from './pages/homes/index.js';

injectTapEventPlugin();

// Render the main component into the dom
ReactDOM.render((
	<Provider store={store()} >
		<Router history={browserHistory}>
			<Route path="/" component={Layout}>
				<IndexRoute component={Home} />
				
				<Route path="/homes" component={Home} />
				<Route path="/articles/:id" getComponent={(location, callback) => {
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
