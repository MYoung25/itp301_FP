// This gets the current time and keeps it updated on the screen with a timer

import React, {Component} from 'react'

class Time extends Component{
	constructor (props) {
		super(props);
		this.state = {
			time: 'time',
			date: 'Date',
			year: 'year',
			timezone: 'timezone'
		}
		this.getTime = this.getTime.bind(this);
	}
	componentDidMount(){
		this.getTime();
	}
	getTime() {
		// get the time as a STRING
		var currentTime = String(new Date());
		// take the pieces of the string and put them into variables
		var time = currentTime.substr(16,5);
		var date = currentTime.substr(0, 10);
		var year = currentTime.substr(11, 4);
		var timezone = currentTime.substr(35,3);

		// change from military time to 12hr time
		if(time.substr(0,2) > '11'){
			time += ' PM';
		} else {
			time += ' AM';
		}

		// add the AM or PM label
		if(parseInt(time.substr(0,2)) > 12){
			var minute = time.substr(2,3);
			var hour = parseInt(time.substr(0,2)) - 12;
			time = hour + minute + ' PM';
		} else if(parseInt(time.substr(0,2)) < 1){
			var minute = time.substr(2,3);
			var hour = parseInt(time.substr(0,2)) + 12;
			time = hour + minute + ' AM';
		}

		// update the states
		this.setState({
			time: time,
			date: date,
			year: year,
			timezone, timezone
		});

		// call this function again in ~5 seconds
		setTimeout(this.getTime, 5000);
	}
	render(){
		// output the time in an easily readable format
		return(
			<div className="time-module">
				<div className="calendar">
					{this.state.date}, {this.state.year} 
				</div>
				<div className="time-time">
					{this.state.time}
				</div>
			</div>
		);
	}
}

export default Time;