import React, {Component} from 'react'
import {Link} from 'react-router'

class NewsArticle extends Component {
	constructor (props) {
		super(props);
		this.imgDisplay = this.imgDisplay.bind(this);
	}
	imgDisplay(){
		if(this.props.data.multimedia[0] !== undefined){
			console.log(this.props.data.multimedia[0].url);
			return "'" + this.props.data.multimedia[0].url + "'";
		} else {
			return "";
		}
	}
	render(){
		return(
			<a href={this.props.data.url} target="_blank">
			<div>
				<img src={this.imgDisplay} />
				<span className="article-title">{this.props.data.title}</span><br/>
				<span className="article">{this.props.data.abstract} 
				 Read more...</span>
			</div>
			<hr/>
			</a>
		);
	}
}

export default NewsArticle;