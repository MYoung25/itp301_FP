import React, {Component} from 'react';
import { Link } from 'react-router'

class Nav extends Component{
	render() {
		return (
			<div>
			this is the nav
			{this.props.children}
			</div>
		);
	}
}

export default Nav;