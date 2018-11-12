import React from 'react';
import { Link } from 'react-router-dom';

import MenuModal from './MenuModal';

class NavBar extends React.Component {
	state = {
		menuOption: undefined
	};

	handleMenuModal = (displayMenu) => {
		this.setState(() => ({menuOption: displayMenu}));
	};
	handleCloseMenuModal = () => {
		this.setState(() => ({menuOption: undefined}))
	};

	dropDownMenu = () => {
		document.getElementById("menuDropdown").classList.toggle("show");
	}

	render() {
		return (
			<header>
				<nav id="top" className={this.props.landingPage ? "nav__barLandingPage" : "nav__bar"}>
					<Link to="/">
						<span className="nav__item">
							<img className="nav__logo" src="./assets/img/FreedomTreeAppIcon.svg" alt="tree icon"/>
							<img className="nav__logoText" src="./assets/img/FreedomTreeLogoTextOnly.svg" alt="Freedom Tree"/>
						</span>
					</Link>
					<ul className="nav__menu">
						<li className="nav__item nav__itemLg"><a onClick = {() => this.handleMenuModal("About")}>About</a></li>
						<li className="nav__item nav__itemLg"><a onClick = {() => this.handleMenuModal("Contact")}>Contact</a></li>
						<li className="nav__item nav__itemLg"><a onClick = {() => this.handleMenuModal("Donate")}>Donate</a></li>
						<div className="nav__dropdown">
							<li className="nav__hamburger"><a onClick = {() => this.dropDownMenu()}><i className="fas fa-bars fa-lg"></i></a></li>
							<div id="menuDropdown" className="nav__itemSm nav__dropdown__content">
							<li className="nav__item nav__itemSm"><a onClick = {() => this.handleMenuModal("About")}>About</a></li>
							<li className="nav__item nav__itemSm"><a onClick = {() => this.handleMenuModal("Contact")}>Contact</a></li>
							<li className="nav__item nav__itemSm"><a onClick = {() => this.handleMenuModal("Donate")}>Donate</a></li>
							</div>
						</div>
					</ul>
				</nav>
				<MenuModal 
					menuOption = {this.state.menuOption}
					handleCloseMenuModal = {this.handleCloseMenuModal}
				/>
			</header>
		)
	}
}

export default NavBar;