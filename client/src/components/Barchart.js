import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2'



export class LineChart extends Component {

	getRandomColor = () => {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	// Assignment Chart
	render() {

		const data = this.props.score;
		let title = [];
		let scores = [];
		let i = 0;
		for (i; i < data.length; i++) {
			title.push(data[i].title)
			scores.push(data[i].score)
		}


		const myData = {
			// These values for labels I want to receive as props
			// labels: ["Africa", "Asia", "Europe", "Latin America"],
			labels: title,
			datasets: [
				{
					label: "Course quiz scores",
					backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850"],
					// These values I want to receive as props
					// data: [2478, 5267, 734, 784]
					data: scores
				}
			]
		};


		return (
			<div className="card shadow">
				<div className="card-header">
					<h6 className="m-0 font-weight-bold text-primary">My Quiz Points</h6>
				</div>
				<div className="card-body">
					<Bar
						data={myData}
						width={100}
						height={370}
						options={{
							maintainAspectRatio: false,
							legend: { display: false },
							title: {
								display: true,
								text: 'My quiz points for courses',
							},
							scales: {
								yAxes: [{
									ticks: {
										max: 8,
										beginAtZero: true
									}
								}]
							}
						}}
					/>
				</div>
			</div>
		)
	}
}

export default LineChart
