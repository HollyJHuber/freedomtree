import React from 'react';
import NavBar from './NavBar';
import MenuModal from './MenuModal';
import Hero from './Hero';
import Interview from './Interview';
import Footer from './Footer';

class FreedomTreeApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			landingPage: true,
			menuOption: undefined
		};
	}
	handleMenuModal = () => {
		const menuSelected = "about";
		this.setState(() => ({menuOption: menuSelected}));
	};
	handleCloseMenuModal = () => {
		this.setState(() => ({menuOption: undefined}))
	};
	handleChangeLandingPage = () => {
		this.setState((prevState) => ({landingPage: !prevState}))
		console.log("hooked up to App");
	};
	render() {
		return (
			<div>
				<NavBar 
					landingPage = {this.state.landingPage}
					handleMenuModal={this.handleMenuModal}
				/>
				<MenuModal 
				menuOption = {this.state.menuOption}
				handleCloseMenuModal = {this.handleCloseMenuModal}
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