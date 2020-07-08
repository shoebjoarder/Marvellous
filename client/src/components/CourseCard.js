import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap"
import { withRouter } from "react-router";


class CourseCard extends React.Component {

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
			<Card tag="a" onClick={() => this.handleClick(course)} style={{ width: '245px', borderRadius: '0.8em', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)",  boxShadow: '0px 0px 20px -1px rgba(0,0,0,0.75)',  marginBottom: "2em", cursor: "pointer" }}>
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