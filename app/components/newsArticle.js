// This is the component that produces each of the articles

import React, {Component} from 'react'

class NewsArticle extends Component {
	constructor (props) {
		super(props);
		this.expand = this.expand.bind(this);
	}
	expand(obj){
		// get the computed style and then toggle the article's snippet
		if(window.getComputedStyle(obj.target.nextSibling.nextSibling).display == 'none'){
			obj.target.nextSibling.nextSibling.style.display='inline';
		} else {
			obj.target.nextSibling.nextSibling.style.display='none';
		}
	}
	render(){
		// if there is a photo, pull the url, add the url to the component, then render
		var img;
		if(this.props.photo != undefined){
			img = <img src={this.props.photo.url} className="thumbnail" />;
		}
		return(
			<div className="snippet">
				{img}
				<span className="article-title" onClick={this.expand}>{this.props.data.title}</span><br/>
				<span className="article">{this.props.data.abstract} 
				 	<a href={this.props.data.url} target="_blank"> Read more...</a>
				</span>
			</div>
		);
	}
}

export default NewsArticle;