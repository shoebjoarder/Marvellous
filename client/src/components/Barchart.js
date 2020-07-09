import React from 'react'
import { Bar } from 'react-chartjs-2'


export class LineChart extends React.Component {

	getRandomColor = () => {
		let letters = '0123456789ABCDEF';
		let color = '#';
		for (var i = 0; i < 6; i++) {
			color += letters[Math.floor(Math.random() * 16)];
		}
		return color;
	}

	render() {
		const data = this.props.score;
		let title = [];
		let scores = [];
		let color = []
		let i = 0;
		for (i; i < data.length; i++) {
			title.push(data[i].title)
			scores.push(data[i].score)
			color.push(this.getRandomColor())
		}


		const myData = {
			labels: title,
			datasets: [{
				label: "Quiz scores",
				backgroundColor: color,
				data: scores
			}]
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
								xAxes: [{
									barPercentage: 0.6
								}],
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
