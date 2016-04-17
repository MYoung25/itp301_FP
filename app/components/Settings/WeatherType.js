import React, {Component} from 'react'
import $ from 'jquery'

var temp_f;
var temp_c;

class WeatherType extends Component {

	getWeatherData(event){
		$.ajax({
  			url : "http://api.wunderground.com/api/e82b459c85a499a5/geolookup/conditions/q/CA/Los_Angeles.json",
		  	dataType : "jsonp",
		  	success : function(parsed_json) {
			  	var location = parsed_json['location']['city'];
		  		temp_f = parsed_json['current_observation']['temp_f'];
		  		temp_c = parsed_json['current_observation']['temp_c'];
		  		var icon = parsed_json['current_observation']['icon'];
		  		var weather = parsed_json['current_observation']['weather'];

		  		document.querySelector('.weather-location').innerHTML = location;

		  		document.querySelector('.current-temperature').innerHTML = temp_f + "&deg;" + 'F';

		  		document.querySelector('.current-weather').innerHTML = weather;
		  		document.querySelector('.current-weather-icon').src="http://icons.wxug.com/i/c/k/" + icon + ".gif";
			}
		});
	}
	Selected(event){
		if (event.target.value == 'f'){
		  	document.querySelector('.current-temperature').innerHTML = temp_f + "&deg;" + 'F';
		} else {
		  	document.querySelector('.current-temperature').innerHTML = temp_c + "&deg;" + 'C';
		}
	}
	render(){
		return(
			<div onpageload={this.getWeatherData()}>
			Weather: 
				<input type="radio" name="temp_chooser" defaultValue="f" defaultChecked onChange={this.Selected.bind(this)} /> &deg;F
				<input type="radio" name="temp_chooser" defaultValue="c" onChange={this.Selected.bind(this)}/> &deg;C
			</div>
		);
	}


}

export default WeatherType;