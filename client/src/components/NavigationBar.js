import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
	Nav,
	Navbar,
	Button,
	Image,
	Container
} from "react-bootstrap"
import { withRouter } from 'react-router-dom'


class NavigationBar extends React.Component {

	handleSignOut = (e) => {
		e.preventDefault();
		localStorage.clear();
		this.props.history.push('/')
	}

	handleProfile = (e) => {
		e.preventDefault();
		this.props.history.push('/profile')
	}

	
	handleBrowse = (e) => {
		e.preventDefault();
		this.props.history.push('/browse')
	}

	handleLogin = (e) => {
		e.preventDefault();
		this.props.history.push('/login')
	}

	handleHome = (e) => {
		e.preventDefault();
		this.props.history.push('/')
	}

	render() {
		const notLoggedIn = (
			<Nav className="ml-auto" style={{ marginTop: '0.5em' }}>
				<Button onClick={this.handleLogin} style={{ borderRadius: '0.8em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '1.4em' }}>Sign in</Button>
			</Nav>
		)

		const LoggedIn = (
			<Nav className="ml-auto" style={{ marginTop: '0.5em' }}>
				<Nav.Link onClick={this.handleBrowse} style={{ color: "black", paddingRight: '2em', fontSize: '1.3em' }}>Browse</Nav.Link>
				<Nav.Link onClick={this.handleProfile} style={{ color: "black", paddingRight: '2em', fontSize: '1.3em' }}>Profile</Nav.Link>
				<Button onClick={this.handleSignOut} style={{ borderRadius: '0.8em', backgroundColor: '#1E38BF', WebkitBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", MozBoxShadow: "0px 0px 20px -1px rgba(0,0,0,0.75)", boxShadow: '0px 0px 5px -1px rgba(0,0,0,0.75)', fontSize: '1.3em' }}>Sign out</Button>
			</Nav>
		)
		return (
			<div>
				<Container>
					<Navbar expand="md">
						<Image src="images/nxgenLogo.png" style={{ height: '2.5em', width: 'auto' }} />
						<Button onClick={this.handleHome} variant="outline-light" style={{ fontSize: '2em', backgroundColor: '#F3F6FE', color: "black" }} >Marvellous</Button>
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