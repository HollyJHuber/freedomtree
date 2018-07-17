import React from 'react';
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

render() {
	return (
		<div>
			<nav id="top" className={this.props.landingPage ? "topNav" : "topNavColor"}>
				<span className="navItem">
					<img className="navLogo" src="./assets/img/FreedomTreeAppIcon.svg" alt="tree icon"/>
					<img className="navText" src="./assets/img/FreedomTreeLogoTextOnly.svg" alt="Freedom Tree"/>
				</span>
				<ul className="navMenu">
					<li className="navItem navItemLg"><a onClick = {() => this.handleMenuModal("about")}>About</a></li>
					<li className="navItem navItemLg"><a onClick = {() => this.handleMenuModal("contact")}>Contact</a></li>
					<li className="navItem navItemLg"><a onClick = {() => this.handleMenuModal("donate")}>Donate</a></li>
					<li className="navItem navItemSm"><a href="#"><i className="fas fa-bars fa-2x"></i></a></li>
				</ul>
			</nav>
			<MenuModal 
				menuOption = {this.state.menuOption}
				handleCloseMenuModal = {this.handleCloseMenuModal}
			/>
		</div>
	)
}
}

export default NavBar;