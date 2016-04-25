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
	// getNews(){

	// 	var apikey = "a620e8bff37d1173b6e6ed8712b999d4:1:75112088";
	// 	var section = "home";

	// 	var newsLookup = "http://api.nytimes.com/svc/topstories/v1/" + section + ".json?api-key=" + apikey;
	// 	$.ajax({
 //  			url : newsLookup,
 //  			type : "GET",
	// 	  	success : function(news) {
	// 	  		var results = news.results[0].title;
	// 			var abstract = news.results[0].abstract;
	// 			var url = news.results[0].url;
	// 			console.log(url);

	// 			this.setState({
	// 				article_title: results,
	// 				article_abstract: abstract,
	// 				article_url: url,
	// 			});
	// 		}.bind(this)
	// 	});
	// }
	// title={this.state.article_title} abstract={this.state.article_abstract} url={this.state.article_url}
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