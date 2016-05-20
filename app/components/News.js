// This produces the news component, makes the AJAX call and then produces NewsArticle components
// for each article returned fron the AJAX call

import React, {Component} from 'react'
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
		this.nyTimes = this.nyTimes.bind(this);
		this.nyTimesApp = this.nyTimesApp.bind(this);
	}
	getNews(){
		var apikey = "a620e8bff37d1173b6e6ed8712b999d4:1:75112088";
		var section = "home";
		var newsLookup = "http://api.nytimes.com/svc/topstories/v1/" + section + ".json?api-key=" + apikey;
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
	nyTimes(){
		window.location.href="http://developer.nytimes.com";
	}
	nyTimesApp(obj){
		var newsAnimation = parseInt(window.getComputedStyle(document.querySelector('.news')).right);

		document.querySelector('.news').style.overflow = 'scroll';

		var animation;
		if(newsAnimation == -400){
			animation = setInterval(slideIn, 1);
		} else {
			animation = setInterval(slideOut, 1);
		}
		
		function slideIn(){
			if(newsAnimation != '0px'){
				newsAnimation = parseInt(newsAnimation);
				newsAnimation += 5;
				newsAnimation +='px';
				document.querySelector('.news').style.right = newsAnimation;
			} else {
				document.querySelector('.nytimes-app').style.display = 'none';
				document.querySelector('.nytimes-close').style.display = 'block';
				clearInterval(animation);
			}
		}

		function slideOut(){
			if(newsAnimation != '-400px'){
				newsAnimation = parseInt(newsAnimation);
				newsAnimation -= 5;
				newsAnimation += 'px';
				document.querySelector('.news').style.right = newsAnimation;
			} else {
				document.querySelector('.nytimes-app').style.display = 'block';
				document.querySelector('.nytimes-close').style.display = 'none';
				document.querySelector('.news').style.overflow = 'visible';
				clearInterval(animation);
			}
		}

	}
	render(){
		var articles = [];
		this.state.newsResult.forEach(function(news){
			articles.push(<NewsArticle data={news} photo={news.multimedia[0]} key={news.title} />);
		});
		return(
			<div className="news">

				<h2 className="nytimes" onClick={this.nyTimes}></h2>
				<img className="nytimes-app" src="./assets/nyt-app.png" onClick={this.nyTimesApp} />
				<img className="nytimes-close" src="./assets/close.png" onClick={this.nyTimesApp} />

				<div className="news-snippets">
					{articles}
				</div>
			</div>
		);
	}
}
export default News;