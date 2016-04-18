import React, {Component} from 'react'
import {Link} from 'react-router'
import $ from 'jquery'

class Weather extends Component{
	constructor (props) {
		super(props);
		this.state = {
			location: '',
			weather: '',
			temp_f: '',
			temp_c: '',
			temp_output: '',
			metric: this.props.metric,
			icon: '',
			city: 'Los_Angeles',
			state: 'CA'
		}
		this.getWeatherData = this.getWeatherData.bind(this);
		this.chooseMetric = this.chooseMetric.bind(this);
	}
	componentDidMount(){
		// this is the original call to getWeatherData which sets states
		// for all weather-related information
		this.getWeatherData(this.state.metric);
	}
	componentWillReceiveProps(nextProps){
		// This accepts nextProps, which are the updated props from HomePage
		this.chooseMetric(nextProps.metric);
	}
	getWeatherData(){

		var geolookup = "http://api.wunderground.com/api/e82b459c85a499a5/geolookup/conditions/q/" + this.state.state + "/" + this.state.city + ".json";

		$.ajax({
  			url : geolookup,
		  	dataType : "jsonp",
		  	success : function(parsed_json) {
			  	var location = parsed_json['location']['city'];
		  		var temp_f = parsed_json['current_observation']['temp_f'];
		  		var temp_c = parsed_json['current_observation']['temp_c'];
		  		var icon = parsed_json['current_observation']['icon'];
		  		var weather = parsed_json['current_observation']['weather'];

		  		icon = "http://icons.wxug.com/i/c/k/" + icon + ".gif";
				
				this.setState({
					location: location,
					weather: weather,
					icon: icon,
					temp_f: temp_f,
					temp_c: temp_c,
					temp_output: temp_f
				});

				this.chooseMetric();
			}.bind(this)
		});
	}
	chooseMetric(newMetric){
		if (newMetric == 'f' || this.state.metric == 'f'){
			this.setState({
				temp_output: this.state.temp_f,
				metric: ' F'
			});
		} else {

			this.setState({
				temp_output: this.state.temp_c,
				metric: ' C'
			});
		}
	}
	render(){
		return(
			<div className="weather-module">
				<div className="temperature">
					<span className="weather-location">
						{this.state.location}</span><br/>

					<span className="current-temperature">
						{this.state.temp_output} &deg; {this.state.metric}
					</span><br/>

					<img src={this.state.icon} /><br/>

					<span className="current-weather">
						{this.state.weather}</span>
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