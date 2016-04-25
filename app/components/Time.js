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
		// setInterval(this.getTime(), this.props.pollInterval);
	}
	getTime() {
		var currentTime = String(new Date());
		var time = currentTime.substr(16,5);
		var date = currentTime.substr(0, 10);
		var year = currentTime.substr(11, 4);
		var timezone = currentTime.substr(35,3);

		if(time.substr(0,2) > '11'){
			time += ' PM';
		} else {
			time += ' AM';
		}

		if(parseInt(time.substr(0,2)) > 12){
			var minute = time.substr(2,3);
			var hour = parseInt(time.substr(0,2)) - 12;
			time = hour + minute + ' PM';
		} else if(parseInt(time.substr(0,2)) < 1){
			var minute = time.substr(2,3);
			var hour = parseInt(time.substr(0,2)) + 12;
			time = hour + minute + ' AM';
		}

		this.setState({
			time: time,
			date: date,
			year: year,
			timezone, timezone
		});

		setTimeout(this.getTime, 5000);
	}
	render(){
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