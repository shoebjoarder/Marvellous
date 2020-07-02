import React, { Component } from 'react'
import LoginChoice from './LoginChoice';
import LoginForm from './LoginForm';
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
		if (!this.state.chooseEmail && this.state.newUser) {
			return (
				<div>
					<LoginForm changeLogin={this.changeLogin} />
				</div>
			)
		}
		else if (!this.state.newUser) {
			return (
				<div>
					<RegistrationPage changeUser={this.changeUser} />
				</div>
			)
		} else {
			return (
				<div>			
					<LoginChoice changeLogin={this.changeLogin} changeUser={this.changeUser} />
				</div>
			)
		}
	}
}
