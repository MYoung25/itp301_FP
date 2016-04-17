import React, {Component} from 'react'
import { Link } from 'react-router'
import Background from './Background.js'
import WeatherType from './Settings/WeatherType'

class Settings extends Component {
	render(){
		return(
			<div className="settings">
				<h2>Settings</h2>
				<Background />
				<WeatherType didChangeDegreeType={this.props.didChangeDegreeType} />
			</div>
		);
	}
}

export default Settings;