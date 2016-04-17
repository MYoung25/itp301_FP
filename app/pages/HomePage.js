import React, {Component} from 'react'
import { Link } from 'react-router'


import Weather from '../components/Weather'
import Settings from '../components/Settings'


class HomePage extends Component{
	getInitalState() {
		return {
			"degreeString": "0 deg F"
		};
	}
	didChangeDegreeType(value) {
		this.setState({
			"degreeString": value
		});
	}
	render() {
		return (
			<div>
				<Settings didChangeDegreeType={this.didChangeDegreeType}/>

				<Weather degreeString={this.state.degreeString}/>
			</div>
		);
	}
	LoadBackground(){
		document.querySelector('body').style.background = "url('../assets/background.jpg')";
	}

}

export default HomePage;