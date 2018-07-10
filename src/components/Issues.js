import React from 'react';
import Issue from './Issue';

class Issues extends React.Component {
  render() {

      return (
      <div>
        <h1 id="question">What's Happening?</h1>
        <h4 id="instruction">Select the issue that best describes your situtation:</h4>
        {
          this.props.issues.map((issue) => 
            <Issue key={issue.id} issueIcon={issue.icon} issueText={issue.text}/>)
        }
        
      </div>
    );
  }
}

export default Issues;