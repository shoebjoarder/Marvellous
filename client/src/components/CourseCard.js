import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap"
import { withRouter } from "react-router";


/* TODO: 
1. change to class
2. create some states
3. replace the title and text part in card with the access to newly created state 
4. create a function to change the state */
class CourseCard extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			result: []
		}
	}

	handleClick = (course) => {
		console.log(course)
		localStorage.setItem("selectedCard", JSON.stringify(course));
    this.props.history.push('/course');
	};

	render() {
		let titleCourse = this.props.course.title;
		let description_1 = this.props.course.desc_1;
		let image = ""
		let course = this.props.course;
		image += '/' + this.props.course.image

		return (
			<Card tag="a" onClick={() => this.handleClick(course)} style={{ width: '250px', borderRadius: '0.8em', boxShadow: '2px 2px 4px #000000',  marginBottom: "1em", cursor: "pointer" }}>
				<Card.Img variant="top" className="mx-auto d-block" style={{ height: 'auto', width: '230px' }} src={image} />
				<Card.Body>
					<Card.Title>{titleCourse}</Card.Title> {/* this should be changed to this.props.title*/}
					<Card.Text style={{ paddingBottom: '1.2em' }}>
						{description_1}
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}

export default withRouter(CourseCard)