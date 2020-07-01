import React, { Component } from 'react'
import LoginChoice from './LoginChoice';
import LoginForm from './LoginForm';
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';
import RegistrationPage from './RegistrationPage';

export default class MainLoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chooseEmail: true,
			newUser: true
		}
	}

	changeLogin = (email) => {
		this.setState({
			chooseEmail: email
		})
	}

	changeUser = (user) => {
		this.setState({
			newUser: user
		})
	}

	render() {
/* 		if (this.state.chooseEmail && this.state.newUser) {
			return (
				<div>
					<NavigationBar />
					<LoginChoice changeLogin={this.changeLogin} changeUser={this.changeUser} />
					<FooterBar />
				</div>
			)
		}
		else */ 
		if (!this.state.chooseEmail && this.state.newUser) {
			return (
				<div>
					<NavigationBar />
					<LoginForm changeLogin={this.changeLogin} />
					<FooterBar />
				</div>
			)
		}
		else if (!this.state.newUser) {
			return (
				<div>
					<NavigationBar />
					<RegistrationPage changeUser={this.changeUser} />
					<FooterBar />
				</div>
			)
		} else {
			return (
				<div>
					<NavigationBar />
					<LoginChoice changeLogin={this.changeLogin} changeUser={this.changeUser} />
					<FooterBar />
				</div>
			)
		}

	}
}
