import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

class Weather extends Component{
	constructor (props) {
		super(props);
	}
	render(){
		return(
			<div className="weather-module">
				<div className="temperature">
					<span className="weather-location"></span><br/>
					<span className="current-temperature"></span><br/>
					<img className="current-weather-icon" /><br/>
					<span className="current-weather"></span>
				</div>
				<div className="wunderground-api">
					<a href="https://www.wunderground.com/?apiref=ab14412e93633ca7">
						<img src={"assets/wunderground_logo.png"} className="wunderground_logo" alt="Weather Underground"/>
					</a>
				</div>
			</div>
		);
	}
}

export default Weather;