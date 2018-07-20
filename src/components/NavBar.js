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
			<nav id="top" className={this.props.landingPage ? "nav__barLandingPage" : "nav__bar"}>
				<span className="nav__item">
					<img className="nav__logo" src="./assets/img/FreedomTreeAppIcon.svg" alt="tree icon"/>
					<img className="nav__logoText" src="./assets/img/FreedomTreeLogoTextOnly.svg" alt="Freedom Tree"/>
				</span>
				<ul className="nav__menu">
					<li className="nav__item nav__itemLg"><a onClick = {() => this.handleMenuModal("about")}>About</a></li>
					<li className="nav__item nav__itemLg"><a onClick = {() => this.handleMenuModal("contact")}>Contact</a></li>
					<li className="nav__item nav__itemLg"><a onClick = {() => this.handleMenuModal("donate")}>Donate</a></li>
					<li className="nav__item nav__itemLg"><a onClick = {() => this.handleMenuModal("faq")}>FAQ</a></li>
					<li className="nav__item nav__itemSm"><a href="#"><i className="fas fa-bars fa-2x"></i></a></li>
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