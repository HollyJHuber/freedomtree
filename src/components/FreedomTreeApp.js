import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Interview from './Interview';
import Footer from './Footer';

class FreedomTreeApp extends React.Component {
	state = {
			landingPage: true,
	};
	
	// handleMenuModal = () => {
	// 	const displayMenu = "about";
	// 	this.setState(() => ({menuOption: displayMenu}));
	// };
	// handleCloseMenuModal = () => {
	// 	this.setState(() => ({menuOption: undefined}))
	// };
	handleChangeLandingPage = () => {
		this.setState((prevState) => ({landingPage: !prevState}))
	};
	render() {
		return (
			<div>
				<NavBar 
					landingPage = {this.state.landingPage}
				/>
				{this.state.landingPage && <Hero />}
				<Interview 
					landingPage = {this.state.landingPage}
					handleChangeLandingPage ={this.handleChangeLandingPage}
				/>
				<Footer />
			</div>
		);
	}
}

export default FreedomTreeApp;