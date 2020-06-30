import React, { Component } from 'react'
import { Line } from 'react-chartjs-2'

const data = {
	labels: ["Quiz 1", "Quiz 2", "Quiz 3", "Quiz 4", "Quiz 5"],
	datasets: [{
		label: "Bootstrap",
		lineTension: 0.3,
		backgroundColor: "rgba(78, 115, 223, 0.05)",
		borderColor: "rgba(78, 115, 223, 1)",
		pointRadius: 3,
		pointBackgroundColor: "rgba(78, 115, 223, 1)",
		pointBorderColor: "rgba(78, 115, 223, 1)",
		pointHoverRadius: 3,
		pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
		pointHoverBorderColor: "rgba(78, 115, 223, 1)",
		pointHitRadius: 10,
		pointBorderWidth: 2,
		data: [2.7, 1.0, 2.3, 2.0, 4.0],
	}],
}

export class LineChart extends Component {
	// Assignment Chart
	render() {
		return (
			<div className="card shadow">
				<div className="card-header">
					<h6 className="m-0 font-weight-bold text-primary">My Quiz Progress</h6>
				</div>
				<div className="card-body">
					< Line ref="chart" data={data} />
				</div>
			</div>
		)
	}
}

export default LineChart
