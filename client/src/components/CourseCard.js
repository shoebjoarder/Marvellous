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
		return (
			<Card style={{ width: '250px', borderRadius: '0.8em', boxShadow: '2px 2px 4px #000000' }}>
				<Card.Img variant="top" className="mx-auto d-block" style={{ height: '230px', width: '230px' }} src="./images/bootstrap.png" />
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