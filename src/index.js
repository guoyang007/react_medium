import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link} from 'react-router';
import Layout from 'components/layout.js';
import ArticleList from './components/article-list/index.js';
import ArticleDetail from './components/article-detail/index.js';

// Render the main component into the dom
ReactDOM.render((
	<Router>
		<Route path="/" component={Layout}>
			<Route path="/homes" component={ArticleList} />
			<Route path="/articles/:id" component={ArticleDetail} />
		</Route>
	</Router>
), document.getElementById('app'));
