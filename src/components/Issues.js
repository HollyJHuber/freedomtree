import React from 'react';
import Issue from './Issue';

class Issues extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
			selectedIssueId: 0
    };
    this.selectIssue = this.selectIssue.bind(this);
  }
  selectIssue(id) {
    this.setState((prevState) => {
      return {
        selectedIssueId: id
      };
    });
  } 

  render() {
      return (
      <div>
        <h1 id="question">{this.props.question}</h1>
        <h4 id="instruction">{this.props.instruction}</h4>
        {this.props.landingPage &&
          issues.map((issue) => 
            <Issue 
              key={issue.id} 
              issueId={issue.id} 
              issueNotation={issue.notation}
              issueIcon={issue.icon} 
              issueText={issue.text}
              selectedIssueId={this.state.selectedIssueId}
              onSelectIssue={this.selectIssue}
            />)
        }
        {!this.props.landingPage && <h1>testing landingPage</h1>}
      </div>
    );
  }
}

Issues.defaultProps = {
  question: "What's Happening?",
  instruction: "Select the issue that best describes your situtation:"
};
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