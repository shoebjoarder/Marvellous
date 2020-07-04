import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, CardDeck } from "react-bootstrap"
import CourseCard from './CourseCard';
// import jwt_decode from 'jwt-decode'
import axios from 'axios'


export default class BrowseCourses extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			courses: []
		}
	}

	componentDidMount = () => {
		// this.setState({
		// 	courses: []
		// })
		this.getCourses();
	}

	getCourses = () => {
		axios({
			url: 'http://localhost:3000/browse',
			method: 'GET'
		}).then((response) => {
			const data = response.data
			this.setState({
				courses: data
			});
			// This needs to be removed later
			console.log(this.state.courses);
		}).catch((error) => {
			console.log(error.response.request);
		})
	}

	displayCourses = (courses) => {
		if (!courses.length) return null;

		return courses.map((course, index) => (
			<div key={index} >
				<CourseCard title={course.title} desc={course.desc_1} />
			</div>
		));
	}

	render() {
		return (
			<div>
				<Container style={{ marginTop: "5em", marginBottom: '21.2em' }}>

					<h1 style={{ fontSize: '4.5em' }}>Your Courses</h1>
					<p style={{ color: '#8A8A8A', fontSize: '1.5em', paddingBottom: '1.5em' }}>Courses you recently worked on</p>
					<CardDeck style={{ paddingBottom: '5em' }}>
						{/* <CourseCard /> */}
					</CardDeck>

					<hr></hr>

					<h1 style={{ fontSize: '4.5em', paddingTop: '0.5em' }}>Popular Courses</h1>
					<p style={{ color: '#8A8A8A', fontSize: '1.5em', paddingBottom: '1.5em' }}>Popular with our users last month</p>
					<CardDeck>
						{this.displayCourses(this.state.courses)}
					</CardDeck>

				</Container>
			</div>
		)
	}
}