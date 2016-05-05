import React, {Component} from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import './main.css';
import './assets/background.jpg';
import './assets/nyt-header.png';

import Nav from './pages/Nav'
import HomePage from './pages/HomePage'

render((
		<Router history={hashHistory}>
			<Route path='/' component = {Nav}>
				<IndexRoute component={HomePage}/>
			</Route>
		</Router>
	), document.getElementById('root'));