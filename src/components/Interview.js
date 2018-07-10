import React from 'react';
import History from './History';
import Issues from './Issues';

class Interview extends React.Component {
	render() {
			return(

			<div>
				<section className="interview">
					<History />
					<Issues issues={issues}/>
				</section>
			</div>
		);
	}
}

const issues = [
	{ id: 100, notation: "Discrimination", icon: "fas fa-users", text: "Discrimination", itemId: 200},
	{ id: 101, notation: "Bullying", icon: "fas fa-child", text: "Bullying", itemId: 201},
	{ id: 102, notation: "Sexual Harassment", icon: "fas fa-hand-rock", text: "Sexual Harassment", itemId: 202},
	{ id: 103, notation: "LGBTQ", icon: "fas fa-transgender-alt", text: "LGBTQ", itemId: 203},
	{ id: 104, notation: "Religion", icon: "fas fa-church", text: "Religion", itemId: 204},
	{ id: 105, notation: "Speech", icon: "fas fa-bullhorn", text: "Speech", itemId: 205},
	{ id: 106, notation: "Protest/Assembly", icon: "fas fa-newspaper", text: "Protest/Assembly", itemId: 206},
	{ id: 107, notation: "Disability", icon: "fab fa-accessible-icon", text: "Disability", itemId: 207},
	{ id: 108, notation: "Health & Safety", icon: "fas fa-medkit", text: "Health & Safety", itemId: 208},
	{ id: 109, notation: "Police", icon: "fas fa-exclamation-triangle", text: "Police", itemId: 209},
	{ id: 110, notation: "Emergency", icon: "fas fa-ambulance", text: "Emergency (Call 911)", itemId: 210},
	{ id: 111, notation: "Other", icon: "fas fa-question", text: "Other", itemId: 211}
	];

export default Interview;