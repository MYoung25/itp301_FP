import React, {Component} from 'react'
import $ from 'jquery'


class Background extends Component{
	constructor (props){
		super(props);
		if(localStorage.getItem('background_img') !== null){
			document.querySelector('body').style.background = "url(" + localStorage.getItem("background_img") + ") cover";
		}
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
	    	localStorage.setItem("background_img", e.target.result);
	    	document.querySelector('body').style.backgroundSize = "200vh";
		};

	}
}

export default Background;