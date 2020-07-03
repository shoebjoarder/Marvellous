import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Row, Image, Container } from "react-bootstrap"

export default function FooterBar() {
	return (
		<div className="fixed" style={{ backgroundColor: '#E5EAFF'}}>
			<Container>
				<Row className='justify-content-center'>
					<Col className="align-self-start" style={{ marginTop: '1.5em' }}>
						<a href="/about" style={{ fontSize: '1.7em', color: 'black' }}>
							<Image src="images/nxgenLogo.png" style={{ height: '1.3em', width: 'auto', paddingRight: '0.3em', marginBottom: '0.1em' }} />About Us</a>
					</Col>
					<Col className="col-sm-4 align-self-end order-sm-2" style={{ marginTop: '1.5em', textAlign: 'right'}}>
						<a href="https://github.com/shoebjoarder/awt-marvellous" target="_blank" style={{ fontSize: '1.7em', color: 'black' }}>
							Follow us at 	<Image src="images/github.png" style={{ height: '1em', width: 'auto', paddingRight: '0.15em', marginBottom: '0.3em' }} />Github
						</a>
					</Col>
				</Row>
				<br></br>
			</Container>
		</div >
	)
}

