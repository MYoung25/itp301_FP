import React, {Component} from 'react'
import { Link } from 'react-router'


import Weather from '../components/Weather'
import Settings from '../components/Settings'


class HomePage extends Component{
	render() {
		return (
			<div>
				<Settings />

				<Weather />
			</div>
		);
	}
	LoadBackground(){
		document.querySelector('body').style.background = "url('../assets/background.jpg')";
	}

}

export default HomePage;