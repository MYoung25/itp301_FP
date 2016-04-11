import React, {Component} from 'react';
import { Link } from 'react-router'

class Nav extends Component{
	render() {
		return (
			<div class="nav"onLoad={this.LoadBackground}>
				<span className="nav-link-home"><Link to="/">Home</Link></span>
				<Link to="/settings" className="nav-link-settings">Settings</Link>
			{this.props.children}
			</div>
		);
	}
	LoadBackground(){
		document.querySelector('body').style.background = "url('assets/background.jpg') fixed";
		document.querySelector('body').style.backgroundSize = "200vh";
	}
}

export default Nav;