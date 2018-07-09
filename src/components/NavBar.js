import React from 'react';

const NavBar = (props) => (
	<div>
		<nav className="topNav" id="top">
			<span className="navItem">
				<img className="navLogo" src="./assets/img/FreedomTreeAppIcon.svg" alt="tree icon"/>
				<img className="navText" src="./assets/img/FreedomTreeLogoTextOnly.svg" alt="Freedom Tree"/>
			</span>
			<ul className="navMenu">
				<li className="navItem navItemLg"><a onClick = {props.handleMenuModal}>About</a></li>
				<li className="navItem navItemLg"><a href="#">Contact</a></li>
				<li className="navItem navItemLg"><a href="#">Donate</a></li>
				<li className="navItem navItemSm"><a href="#"><i className="fas fa-bars fa-2x"></i></a></li>
			</ul>
		</nav>
	</div>
);

export default NavBar;