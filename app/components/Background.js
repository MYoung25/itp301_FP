import React, {Component} from 'react'
import { Link } from 'react-router'
import $ from 'jquery'


class Background extends Component{
	constructor (props){
		super(props);
	}
	render() {
		return (
			<div className="changeBackground">
				Choose a File to make your background<br/>
				<input type="file" name="ImageToUpload" className="upload" onClick={this.uploadImageJquery} />
			</div>
		);	
	}
	uploadImage() {
		console.log('upload image form works');
		var upload = document.querySelector('.upload').value
		console.log(upload);
		// document.querySelector('body').style.background = "url(" + upload + ") no-repeat fixed";
	}
	uploadImageJquery(){
		$(function () {
    	$(".upload").change(function () {
        if (this.files && this.files[0]) {
            var reader = new FileReader();
            reader.onload = imageIsLoaded;
            reader.readAsDataURL(this.files[0]);
        }
    });
	});

		function imageIsLoaded(e) {
    	document.querySelector('body').style.background = "url('" + e.target.result + "') fixed";
		};

	}
}

export default Background;