import React from 'react';
import History from './History';
import Issue from './Issue';

class Interview extends React.Component {
  constructor(props) {
    super(props);
		this.state = {
      selectedIssueId: 0,
      selectedItemId: 0
    };
    this.selectIssue = this.selectIssue.bind(this);
    this.selectItem = this.selectItem.bind(this);
  }
  selectIssue(id) {
    this.setState((prevState) => {
      return {
        selectedIssueId: id
      };
    });
  } 
  selectItem(id) {
    this.setState((prevState) => {
      return {
        selectedItemId: id
      };
    });
    console.log('hooked up to Interview');
    this.props.handleChangeLandingPage();
  }

  render() {
      return (
      <div  className="interview">
        {!this.props.landingPage && <History />}
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
              onSelectItem={this.selectItem}
              landingPage={this.props.landingPage}
            />)
        }
        {!this.props.landingPage && 
          what3s.filter(what3 => what3.itemId === this.state.selectedItemId).map(what3 =>   (
            <Issue
              key={what3.id}
              what3Id={what3.id}
              what3Notation={what3.notation}
              what3Text={what3.text}
              landingPage={this.props.landingPage}
            />))
          }
      </div>
    );
  }
}

Interview.defaultProps = {
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

  const what3s = [
    {id: 301, notation: "don't want to participate", text: "I do not want to participate.", itemId: 215},
    {id: 302, notation: "forced to recite", text: "I am being forced to recite.", itemId: 215},
    {id: 303, notation: "forced to stand", text: "I am being forced to stand.", itemId: 215},
    {id: 304, notation: "treated unfairly", text: "I am being treated unfairly for not participating.", itemId: 215},
    {id: 305, notation: "don't want to say Under God", text: "I do not want to say 'Under God'.", itemId: 215},
    {id: 306, notation: "other pledge", text: "Other", itemId: 215},
    {id: 307, notation: " don't want to participate ", text: "I do not want to participate in prayer.", itemId: 201},
    {id: 308, notation: "not allowed to pray", text: "I am not being allowed to pray.", itemId: 201},
    {id: 309, notation: "forced to pray", text: "I am being forced to pray.", itemId: 201},
    {id: 310, notation: " forced to listen to prayers", text: "I am being forced to listen silently to prayer.", itemId: 201},
    {id: 311, notation: "required to be present", text: "I am required to be present while others pray.", itemId: 201},
    {id: 312, notation: "other prayer", text: "Other", itemId: 201}
    ];

export default Interview;