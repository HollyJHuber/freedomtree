import React from 'react';

const InterviewListItem = ({ history, issueText, itemText }) => (
  <div>
    <h3>{history}</h3>
    <p>{issueText}</p>
    <p>{itemText}</p>
  </div>
);

export default InterviewListItem;