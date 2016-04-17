import React, {Component} from 'react'
import { Link } from 'react-router'

import Weather from '../components/Weather'
import Settings from '../components/Settings'
import Time from '../components/Time'


class HomePage extends Component{
	render() {
		return (
			<div>
				<Settings />
				<Weather />
				<Time />

			</div>
		);
	}
	LoadBackground(){
		document.querySelector('body').style.background = "url('../assets/background.jpg')";
	}

}

export default HomePage;