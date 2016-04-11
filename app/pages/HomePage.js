import React, {Component} from 'react'
import { Link } from 'react-router'
import Background from '../components/Background.js'

class HomePage extends Component{
	render() {
		return (
			<div>
			this is the HomePage
			<Background />
			</div>
		);
	}
}

export default HomePage;