import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button, Image, Container } from "react-bootstrap"
import { withRouter } from 'react-router-dom'

class NavigationBar extends React.Component {
	handleSignOut = (e) => {
		e.preventDefault();
		localStorage.removeItem('usertoken')
		this.props.history.push('/')
	}

	render() {
		const notLoggedIn = (
			<Nav className="ml-auto">
				<Nav.Link href="#features" style={{ color: "black", paddingRight: '2em', fontSize: '1.2em' }}>Features</Nav.Link>
				<Button href="/login" style={{ borderRadius: '0.8em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.2em' }}>Sign in</Button>
			</Nav>
		)

		const LoggedIn = (
			<Nav className="ml-auto">
				<Nav.Link href="/browse" style={{ color: "black", paddingRight: '2em', fontSize: '1.2em' }}>Browse</Nav.Link>
				<Nav.Link href="/profile" style={{ color: "black", paddingRight: '2em', fontSize: '1.2em' }}>Profile</Nav.Link>
				<Button href="#" onClick={this.handleSignOut} style={{ borderRadius: '0.8em', backgroundColor: '#1E38BF', boxShadow: '2px 2px 4px #000000', fontSize: '1.2em' }}>Sign out</Button>
			</Nav>
		)
		return (
			<div>
				<Container>
					<Navbar expand="md">
						<Image src="images/nxgenLogo.png" style={{ height: '2.5em', width: 'auto', paddingRight: '0.5em' }} />
						<Navbar.Brand href="/" style={{ fontSize: '2em' }}>Marvellous</Navbar.Brand>
						<Navbar.Toggle aria-controls="basic-navbar-nav" />
						<Navbar.Collapse id="basic-navbar-nav">
							{localStorage.usertoken ? LoggedIn : notLoggedIn}
						</Navbar.Collapse>
					</Navbar>
				</Container>
			</div >
		)
	}
}

export default withRouter(NavigationBar)