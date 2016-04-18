import React, {Component} from 'react'

class WeatherType extends Component {
	constructor (props) {
		super(props);
		this.Selected = this.Selected.bind(this);
	}
	Selected(event){
		// This is called by the radio buttons, 
		// and returns the value of each radio button.
		this.props.changeMetricType(event.target.value);
	}
	render(){
		return(
			<div className="weather-settings">
			<h3>Weather:</h3>
				<input type="radio" name="temp_chooser" defaultValue="f" defaultChecked onChange={this.Selected} /> &deg;F
				<input type="radio" name="temp_chooser" defaultValue="c" onChange={this.Selected}/> &deg;C <br/>

				State: <input type="text" name="query-us-state" placeholder="US State" />
				City: <input type="text" name="query-us-city" placeholder="City" />
			</div>
		);
	}
}

export default WeatherType;