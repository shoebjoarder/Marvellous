import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Image, Container } from "react-bootstrap"

export default function NavigationBar() {
	return (
		<div>
			<Container>
				<Navbar expand="md">
					<Image src="images/nxgenLogo.png" style={{ height: '2.5em', width: 'auto', paddingRight: '0.5em' }} />
					<Navbar.Brand href="#home" style={{ fontSize: '2em' }}>Marvellous</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="ml-auto">
							<Nav.Link href="#home" style={{ paddingRight: '2em', fontSize: '1.2em' }}>Features</Nav.Link>
							<Button href="/" style={{ borderRadius: '0.8em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.2em' }}>Sign in</Button>
						</Nav>
					</Navbar.Collapse>
				</Navbar>
			</Container>

		</div >
	)
}
