import React, {Component} from 'react'
import {Link} from 'react-router'
import NewsArticle from './NewsArticle'
import $ from 'jquery'

class News extends Component {
	constructor (props) {
		super(props);
		this.getNews();
		this.state = {
			article_title: "",
			article_abstract: "",
			article_url: "",
			newsResult: []
		}
		this.getNews = this.getNews.bind(this);
	}
	getNews(){
		var apikey = "a620e8bff37d1173b6e6ed8712b999d4:1:75112088";
		var section = "home";
		var newsLookup = "http://api.nytimes.com/svc/topstories/v1/" + section + ".json?api-key=" + apikey;
		console.log(newsLookup);
		$.ajax({
  			url : newsLookup,
  			type : "GET",
		  	success : function(news) {
		  		this.setState({
		  			newsResult: news.results
		  		});
			}.bind(this)
		});
	}
	render(){
		var articles = [];
		this.state.newsResult.forEach(function(news){
			articles.push(<NewsArticle data={news} key={news.title} />);
		});
		return(
			<div className="news">
				{articles}
			</div>
		);
	}
}
export default News;