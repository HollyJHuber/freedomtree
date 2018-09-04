import React from 'react';

import History from './History';
import List from './List';

class InterviewPage extends React.Component {
  render() {
    return (
      <div className="interview__container">
        <History />
        <h1 className="interview__question">{categories[1]}</h1>
        <h4 className="interview__instruction">{categories[2]}</h4>
        {categories[3].map((category) => 
          <List 
            key={category.id}
            listId={category.id}
            listNotation={category.notation}
            listIcon={category.icon}
            listText={category.text}
          />)
        }
    </div>
    );
  }
}

export default InterviewPage;

const categories = ["List", "What's Happening?", "Select the issue that best describes your situation:",
[
{ id: 100, notation: "Discrimination", icon: "fas fa-users", text: "Discrimination"},
{ id: 101, notation: "Bullying", icon: "fas fa-child", text: "Bullying"},
{ id: 102, notation: "Sexual Harassment", icon: "fas fa-hand-rock", text: "Sexual Harassment"},
{ id: 103, notation: "LGBTQ", icon: "fas fa-transgender-alt", text: "LGBTQ"},
{ id: 104, notation: "Religion", icon: "fas fa-church", text: "Religion"},
{ id: 105, notation: "Speech", icon: "fas fa-bullhorn", text: "Speech"},
{ id: 106, notation: "Protest/Assembly", icon: "fas fa-newspaper", text: "Protest/Assembly"},
{ id: 107, notation: "Disability", icon: "fab fa-accessible-icon", text: "Disability"},
{ id: 108, notation: "Health & Safety", icon: "fas fa-medkit", text: "Health & Safety"},
{ id: 109, notation: "Police", icon: "fas fa-exclamation-triangle", text: "Police"},
{ id: 110, notation: "Emergency", icon: "fas fa-ambulance", text: "Emergency (Call 911)" },
{ id: 111, notation: "Other Issue", icon: "fas fa-question", text: "Other"}
]];