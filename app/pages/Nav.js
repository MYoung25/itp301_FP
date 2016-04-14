import React, {Component} from 'react';
import { Link } from 'react-router'

class Nav extends Component{
	render() {
		return (
			<div className="nav" onLoad={this.LoadBackground}>
				<Link to="/"><img src="./assets/home.png" alt="Home" className="nav-img nav-link-home"/></Link>
				<Link to="/settings"><img src="./assets/settings.png" alt="Settings" className="nav-img nav-link-settings"/></Link>
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