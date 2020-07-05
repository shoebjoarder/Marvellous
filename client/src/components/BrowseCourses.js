import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, CardDeck } from "react-bootstrap"
import CourseCard from './CourseCard';
// import jwt_decode from 'jwt-decode'
import axios from 'axios'
import jwt_decode from 'jwt-decode'

export default class BrowseCourses extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			courses: [],
			yourCourses: []
		}
	}

	componentDidMount = () => {
		const decoded = jwt_decode(localStorage.usertoken);
		let mail =  decoded.identity.email
		this.getYourCourses(mail);
		this.getCourses();
	}

	getYourCourses = (mail) => {
		axios({
			url: 'http://localhost:3000/getYourCourses',
			method: 'POST',
			data: {
				email: mail
			}
		}).then((response) => {
			this.setState({
				yourCourses: response.data
			});
			// This needs to be removed later
			console.log(response.data)
			// console.log(this.state.yourCourses);
		}).catch((error) => {
			console.log(error.response.request);
		})
	}

	getCourses = () => {
		axios({
			url: 'http://localhost:3000/getCourses',
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
		
	displayYourCourses = (yourCourses) => {
		if (!yourCourses.length) return null;

		return yourCourses.map((course, index) => (
			<div key={index} >
				<CourseCard course={course} />
			</div>
		));
	}

	displayCourses = (courses) => {
		if (!courses.length) return null;

		return courses.map((course, index) => (
			<div key={index} >
				<CourseCard course={course} />
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
						{this.displayYourCourses(this.state.yourCourses)}
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