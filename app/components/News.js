import React, {Component} from 'react'
import {Link} from 'react-router'
import newsArticle from './newsArticle'
import $ from 'jquery'

class News extends Component {
	constructor (props) {
		super(props);
		this.state = {
			article_title: "",
			article_abstract: "",
			article_url: "",
			newsResult: ""
		}

		this.getNews = this.getNews.bind(this);
		this.getNews();
	}
	getNews(){
		var apikey = "a620e8bff37d1173b6e6ed8712b999d4:1:75112088";
		var section = "home";

		var newsLookup = "http://api.nytimes.com/svc/topstories/v1/" + section + ".json?api-key=" + apikey;
		
		$.ajax({
  			url : newsLookup,
  			type : "GET",
		  	success : function(news) {

		  		console.log(news.results);

		  		this.setState({
		  			newsResult: news.results
		  		});
		  // 		var results = news.results[0].title;
				// var abstract = news.results[0].abstract;
				// var url = news.results[0].url;

				// var array = news.results;
				// var obj_1 = news.results[0];

				// console.log(news.results);
				// console.log(news.results[0]);

				// this.setState({
				// 	article_title: results,
				// 	article_abstract: abstract,
				// 	article_url: url,
				// 	article: obj_1,
				// 	array: array
				// });
			}.bind(this)
		});
	}
	render(){
		// try using a for loop here instead of forEach
// 
		// 
		// var articles = [];
		// this.state.newsResult.forEach(function(news){
		// 	article.push(<li article={news} key={news.title}>{news.title}</li>);
		// });
		return(
			<div className="news">
				<ol>
					
				</ol>
			</div>
		);
	}
}

export default News;