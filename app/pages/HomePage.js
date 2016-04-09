import React, {Component} from 'react';
import { Link } from 'react-router'

class HomePage extends Component{
	render() {
		return (
			<div>
			this is the HomePage
			{this.props.children}
			</div>
		);
	}
}

export default HomePage;