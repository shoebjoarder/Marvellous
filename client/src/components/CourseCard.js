import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap"

/* TODO: 
1. change to class
2. create some states
3. replace the title and text part in card with the access to newly created state 
4. create a function to change the state */
export default class CourseCard extends React.Component {
	render() {
		let titleCourse = this.props.title;
		let description = this.props.desc;
		let image = ''
		if (titleCourse === "Bootstrap") {
			image += '/images/bootstrap.png'
		} else if (titleCourse === "Flask part 1" || titleCourse === "Flask part 2") {
			image += '/images/flask.png'
		} else if (titleCourse === "React part 1" || titleCourse === "React part 2") {
			image += '/images/react.png'
		} else if (titleCourse === "Dash") {
			image += '/images/dash.png'
		} else if (titleCourse === "MongoDB") {
			image += '/images/mongodb.png'
		} else {

		}

		return (
			<Card style={{ width: '250px', borderRadius: '0.8em', boxShadow: '2px 2px 4px #000000',  marginBottom: "1em" }}>
				<Card.Img variant="top" className="mx-auto d-block" style={{ height: 'auto', width: '230px' }} src={image} />
				<Card.Body>
					<Card.Title>{titleCourse}</Card.Title> {/* this should be changed to this.props.title*/}
					<Card.Text style={{ paddingBottom: '1.2em' }}>
						{description}
					</Card.Text>
				</Card.Body>
			</Card>
		)
	}
}