import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from "react-bootstrap"

/* TODO: 
1. change to class
2. create some states
3. replace the title and text part in card with the access to newly created state 
4. create a function to change the state */
export default function CourseCard() {
	return (
		<div>
			<Card style={{ width: '250px', borderRadius: '0.8em', boxShadow: '2px 2px 4px #000000' }}>
				<Card.Img variant="top" className="mx-auto d-block" style={{ height: '230px', width: '230px' }} src="./images/bootstrap.png" />
				<Card.Body>
					<Card.Title>Course title</Card.Title> {/* this should be changed to this.props.title*/}
					<Card.Text style={{ paddingBottom: '1.2em' }}>
						This is a course card with supporting text below as a natural lead-in to
						additional content. This content is a little bit longer.
      		</Card.Text>
				</Card.Body>
			</Card>
		</div>
	)
}