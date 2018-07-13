import React from 'react';
import Issue from './Issue';

class Issues extends React.Component {
  render() {

      return (
      <div>
        <h1 id="question">What's Happening?</h1>
        <h4 id="instruction">Select the issue that best describes your situtation:</h4>
        {
          issues.map((issue) => 
            <Issue 
              key={issue.id} 
              issueId={issue.id} 
              issueNotation={issue.notation}
              issueIcon={issue.icon} 
              issueText={issue.text}
            />)
        }
      </div>
    );
  }
}

const issues = [
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
  ];

export default Issues;