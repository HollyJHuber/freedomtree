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
	render() {
		return (
			<div>
				<NavBar handleMenuModal={this.handleMenuModal}/>
				<MenuModal 
				menuOption = {this.state.menuOption}
				handleCloseMenuModal = {this.handleCloseMenuModal}
				/>
				<Hero />
				<Interview />
				<Footer />
			</div>
		);
	}
}

export default FreedomTreeApp;