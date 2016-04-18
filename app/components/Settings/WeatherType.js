import React, {Component} from 'react'

class WeatherType extends Component {
	constructor (props) {
		super(props);
		this.Selected = this.Selected.bind(this);
	}
	Selected(event){
		this.props.changeMetricType(event.target.value);
	}
	render(){
		return(
			<div>
			Weather: 
				<input type="radio" name="temp_chooser" defaultValue="f" defaultChecked onChange={this.Selected} /> &deg;F
				<input type="radio" name="temp_chooser" defaultValue="c" onChange={this.Selected}/> &deg;C
			</div>
		);
	}
}

export default WeatherType;