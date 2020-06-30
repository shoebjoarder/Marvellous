import React, { Component } from 'react'
import LoginChoice from './LoginChoice';
import LoginForm from './LoginForm';
import NavigationBar from './NavigationBar';
import FooterBar from './FooterBar';

export default class MainLoginPage extends Component {
	constructor(props) {
		super(props)
		this.state = {
			chooseEmail: true
		}
	}

	changeLogin = (email) => {
		if (this.state.chooseEmail) {
			this.setState({
				chooseEmail: email
			})
		} else {
			this.setState({
				chooseEmail: email
			})
		}

	}

	render() {
		if (this.state.chooseEmail) {
			return (
				<div>
					<NavigationBar />
					<LoginChoice changeLogin={this.changeLogin} />
					<FooterBar />
				</div>
			)
		} else {
			return (
				<div>
					<NavigationBar />
					<LoginForm changeLogin={this.changeLogin} />

					{/* TODO: give a prop to the FooterBar to make it fix */}
					<FooterBar />
				</div>
			)
		}

	}
}
