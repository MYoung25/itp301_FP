import React, {Component} from 'react'
import { Link } from 'react-router'
import Background from '../components/Background.js'
import Weather from '../components/Weather'

class HomePage extends Component{
	render() {
		return (
			<div >
				<Weather />
			</div>
		);
	}
	LoadBackground(){
		document.querySelector('body').style.background = "url('../assets/background.jpg')";
	}
}

export default HomePage;