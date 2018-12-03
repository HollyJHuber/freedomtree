import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => (

	<div className="hero__container">
		<Link to={{
			pathname: `/interview/0`,
			state: {
				id: 0,
				counter: 0
			}
		}}>
				<img className="hero__logo" src= "./assets/img/FreedomTreeLogoTag.svg" 
				alt="freedom tree: free help defending your civil rights"/>
			</Link>
	</div>

);

export default Hero;