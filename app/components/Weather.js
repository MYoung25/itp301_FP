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
					<span className="current-temperature" onpageload={this.getWeatherData()}></span>F<br/>
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

	getWeatherData(){
		$.ajax({
  			url : "http://api.wunderground.com/api/e82b459c85a499a5/geolookup/conditions/q/CA/Los_Angeles.json",
		  	dataType : "jsonp",
		  	success : function(parsed_json) {
			  	var location = parsed_json['location']['city'];
		  		var temp_f = parsed_json['current_observation']['temp_f'];
		  		var icon = parsed_json['current_observation']['icon'];
		  		var weather = parsed_json['current_observation']['weather'];

		  		document.querySelector('.weather-location').innerHTML = location;
		  		document.querySelector('.current-temperature').innerHTML = temp_f + "&deg;";
		  		document.querySelector('.current-weather').innerHTML = weather;
		  		document.querySelector('.current-weather-icon').src="http://icons.wxug.com/i/c/k/" + icon + ".gif";
			}
		});
	}


}

export default Weather;