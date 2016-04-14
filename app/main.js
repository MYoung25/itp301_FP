import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory, browserHistory} from 'react-router'

import './main.css';

import Nav from './pages/Nav'
import HomePage from './pages/HomePage'
import Settings from './pages/Settings'

render((
		<Router history={hashHistory}>
			<Route path='/' component = {Nav}>
				<IndexRoute component={HomePage}/>
				<Route path='/Settings' component={Settings}/>
			</Route>
		</Router>
	), document.getElementById('root'));