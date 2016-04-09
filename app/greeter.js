import React, {Component} from 'react'
import {render} from 'react-dom'
import config from './config.json'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import Nav from './pages/Nav'
import HomePage from './pages/HomePage'


render((
		<Router history={hashHistory}>
			<Route path='/' component = {Nav}>
				<IndexRoute component={HomePage}/>
			</Route>
		</Router>
	), document.getElementById('root'));

