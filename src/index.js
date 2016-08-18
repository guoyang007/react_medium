import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, Link, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'

import { createStore } from 'redux';
import mediumApp from './reducers/drawer.js';

import Layout from 'components/layout.js';
import ArticleList from './components/article-list/index.js';
import ArticleDetail from './components/article-detail/index.js';

injectTapEventPlugin();

// let store = createStore(mediumApp);

// Render the main component into the dom
ReactDOM.render((
	<Router history={createBrowserHistory()}>
		<Route path="/" component={Layout}>
			<IndexRoute component={ArticleList} />
			
			<Route path="/homes" component={ArticleList} />
			<Route path="/articles/:id" component={ArticleDetail} />
		</Route>
	</Router>
), document.getElementById('app'));
