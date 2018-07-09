import React from 'react';
import NavBar from './NavBar';
import Hero from './Hero';
import Interview from './Interview';
import Footer from './Footer';
import MenuModal from './MenuModal';

class FreedomTreeApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			what1s: props.what1s,
			selected: undefined,
			menuOption: undefined
		};
	}
	handleSelectWhatOne = (what1) => {
		this.setState((prevState) => ({
			selected: what1
		}));
	};
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
				<Hero />
				<Interview 
					what1s={this.state.what1s}
					selected={this.state.selected}
					handleSelectWhatOne ={this.handleSelectWhatOne}
					/>
					<MenuModal 
						menuOption = {this.state.menuOption}
						handleCloseMenuModal = {this.handleCloseMenuModal}
						/>
				<Footer />
			</div>
		);
	}
}

FreedomTreeApp.defaultProps = {
	what1s: [
	["Discrimination", "fas fa-users", "Discrimination", ["test", "test"]], 
	["Bullying", "fas fa-child", "Bullying", ["test", "test"]],
	["Sexual Harassment", "fas fa-hand-rock", "Sexual Harassment", ["test", "test"]],
	["LGBTQ", "fas fa-transgender-alt", "LGBTQ", ["test", "test"]], 
	["Religion", "fas fa-church", "Religion",
		[["Prayer", "Prayer"],
		["Invocation/Blessing", "Invocation/Blessing"],
		["Bible/Scripture", "Bible/Scripture"],
		["Other Holy Book/Scripture", "Other Holy Book/Scripture"],
		["Creation Science/Intelligent Design", "Creation Science/Intelligent Design"],
		["Holidays/Songs", "Holidays/Songs"],
		["Proselytizing/Witnessing", "Proselytizing/Witnessing"],
		["Attire/Jewelry", "Attire/Jewelry"],
		["Baccalaureate", "Baccalaureate"],
		["Other Religion", "Other"]]
	],
	["Speech", "fas fa-bullhorn", "Speech", 
		[["Censorship", "Censorship"],
		["Press", "Press"],
		["Art/Music", "Art/Music"],
		["Personal Expression/Attire<", "Personal Expression/Attire"],
		["Pledge of Allegiance", "Pledge of Allegiance"],
		["National Anthem", "National Anthem"],
		["Other Speech", "Other"]]									
	],
	["Protest/Assembly", "fas fa-newspaper", "Protest/Assembly", ["test", "test"]],
	["Disability", "fab fa-accessible-icon", "Disability", ["test", "test"]],
	["Health & Safety", "fas fa-medkit", "Health & Safety", ["test", "test"]],
	["Police (Interactions)", "fas fa-exclamation-triangle", "Police (Interactions)", ["test", "test"]],
	["Emergency", "fas fa-ambulance", "Emergency (Call 911)", ["test", "test"]], 
	["Other", "fas fa-question", "Other", ["test", "test"]],
]
}

export default FreedomTreeApp;