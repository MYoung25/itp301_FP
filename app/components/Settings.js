// This houses each component that changes settings of another component

import React, {Component} from 'react'
import Background from './Background.js'
import WeatherType from './Settings/WeatherType'

class Settings extends Component {
	// This passes the function into <WeatherType /> through props
	render(){
		return(
			<div className="settings">
				<h2>Settings</h2><hr />
				<Background /><hr />
				<WeatherType 
					changeMetricType={this.props.changeMetricType}
					changeUsState={this.props.changeUsState}
					changeCity={this.props.changeCity} />
			</div>
		);
	}
}

export default Settings;