import React, {Component} from 'react'

class WeatherType extends Component {
	constructor (props) {
		super(props);
		this.Selected = this.Selected.bind(this);
		this.setLocation = this.setLocation.bind(this);
	}
	Selected(event){
		// This is called by the radio buttons, 
		// and returns the value of each radio button.
		this.props.changeMetricType(event.target.value);
	}
	setLocation(){
		// get the value of the city input
		var city = document.querySelector('.select-city').value.trim();
		//if city input is empty, set weather city to invalid and state to input
		if(city.length == 0){
			this.props.changeCity('Invalid');
			this.props.changeUsState('Input')
		} else {
			// if city input isnt empty, replace any spaces with underscores
			city = city.replace(/([^a-z\s]|_)/gi, "");

			this.props.changeCity(city);
			this.props.changeUsState(document.querySelector('.select-state').value);
		}

	}
	render(){
		return(
			<div className="weather-settings">
			<h3>Weather:</h3>
				<input type="radio" name="temp_chooser" defaultValue="F" defaultChecked onChange={this.Selected} /> &deg;F
				<input type="radio" name="temp_chooser" defaultValue="C" onChange={this.Selected}/> &deg;C <br/>

				State: <select name="state" className="select-state">
							<option value="AL">AL</option>
							<option value="AK">AK</option>
							<option value="AZ">AZ</option>
							<option value="AR">AR</option>
							<option value="CA">CA</option>
							<option value="CO">CO</option>
							<option value="CT">CT</option>
							<option value="DE">DE</option>
							<option value="DC">DC</option>
							<option value="FL">FL</option>
							<option value="GA">GA</option>
							<option value="HI">HI</option>
							<option value="ID">ID</option>
							<option value="IL">IL</option>
							<option value="IN">IN</option>
							<option value="IA">IA</option>
							<option value="KS">KS</option>
							<option value="KY">KY</option>
							<option value="LA">LA</option>
							<option value="ME">ME</option>
							<option value="MD">MD</option>
							<option value="MA">MA</option>
							<option value="MI">MI</option>
							<option value="MN">MN</option>
							<option value="MS">MS</option>
							<option value="MO">MO</option>
							<option value="MT">MT</option>
							<option value="NE">NE</option>
							<option value="NV">NV</option>
							<option value="NH">NH</option>
							<option value="NJ">NJ</option>
							<option value="NM">NM</option>
							<option value="NY">NY</option>
							<option value="NC">NC</option>
							<option value="ND">ND</option>
							<option value="OH">OH</option>
							<option value="OK">OK</option>
							<option value="OR">OR</option>
							<option value="PA">PA</option>
							<option value="RI">RI</option>
							<option value="SC">SC</option>
							<option value="SD">SD</option>
							<option value="TN">TN</option>
							<option value="TX">TX</option>
							<option value="UT">UT</option>
							<option value="VT">VT</option>
							<option value="VA">VA</option>
							<option value="WA">WA</option>
							<option value="WV">WV</option>
							<option value="WI">WI</option>
							<option value="WY">WY</option>
						</select>

				City: <input type="text" name="query-us-city" className="select-city" placeholder="City" />
				<button name="change-weather-location" onClick={this.setLocation}> Change Weather </button>
			</div>
		);
	}
}

export default WeatherType;