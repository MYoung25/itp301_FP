// import the required dependencies from package.json
import React, {Component} from 'react'
import { Link } from 'react-router'
import $ from 'jquery'
// import the components that go into this page
import Weather from '../components/Weather'
import Settings from '../components/Settings'
import Time from '../components/Time'
import News from '../components/News'

// this is the object that houses the functions and components of HomePage
class HomePage extends Component{
	constructor (props) {
		super(props);
		this.state = {
			metric: 'F',
			usState: 'CA',
			city: 'Los_Angeles',
		}
		this.changeMetricType = this.changeMetricType.bind(this);
		this.changeUsState = this.changeUsState.bind(this);
		this.changeCity = this.changeCity.bind(this);
		// this.getNews = this.getNews.bind(this);
		// this.getNews();
	}
	changeMetricType(value){
		this.setState({
			metric: value
		});
		// This is the function that's called by the change in settings,
		// it changes the state of metric.  Which is then passed into <Weather />
		// through props.
	}
	changeUsState(value){
		this.setState({
			usState: value
		});
	}
	changeCity(value){
		this.setState({
			city: value
		});
	}
	render() {
		return (
			<div>
				<Settings changeMetricType={this.changeMetricType} changeUsState={this.changeUsState} changeCity={this.changeCity} />
				<Weather metric={this.state.metric} usState={this.state.usState} city={this.state.city} />
				<Time />
				<News />
			</div>
		);
	}


}

export default HomePage;