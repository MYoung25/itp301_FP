import React, {Component} from 'react'
import {Link} from 'react-router'

class Nav extends Component{
	constructor(props){
		super(props);
		this.openSettings = this.openSettings.bind(this);
	}
	openSettings(){
		if (document.querySelector('.settings').style.display == "block"){
			document.querySelector('.settings').style.display = "none";
		} else {
			document.querySelector('.settings').style.display = "block";
		}
	}
	render() {
		return (
			<div className="nav">
				<img src="./assets/settings.png" alt="Settings" className="nav-img nav-link-settings" onClick={this.openSettings}/>
			{this.props.children}
			</div>
		);
	}
}

export default Nav;