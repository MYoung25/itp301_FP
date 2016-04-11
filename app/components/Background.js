import React, {Component} from 'react';
import { Link } from 'react-router'

class Background extends Component{
	constructor (props){
		super(props);
	}
	render() {
		return (
			<div>
				<input type="file" className="upload" onClick={this.uploadImage}></input>
			</div>
		);
	}
	uploadImage() {
		console.log('upload image works')
	}
}

export default Background;