import React, {Component} from 'react'
import { Link } from 'react-router'

import Weather from '../components/Weather'
import Settings from '../components/Settings'
import Time from '../components/Time'


class HomePage extends Component{
	constructor (props) {
		super(props);
		this.state = {
			metric: 'f'
		}
	}
	changeMetricType(value){
		this.setState({
			metric: value
		});
	}
	render() {
		return (
			<div>
				<Settings changeMetricType={this.changeMetricType.bind(this)} />
				<Weather metric={this.state.metric} />
				<Time />

			</div>
		);
	}
	LoadBackground(){
		document.querySelector('body').style.background = "url('../assets/background.jpg')";
	}

}

export default HomePage;