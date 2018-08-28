import React from 'react';
import { connect } from 'react-redux';

import InterviewListItem from './InterviewListItem';

const InterviewList = (props) => (
  <div>
    <h3>interview list here</h3>
    <h4>{props.notes.question}</h4>
     {props.interviews.map((interview) => {
       return <InterviewListItem key={interview.id}{...interview}/>
     })}
  </div>
);

const mapStateToProps = (state) => { 
  return {
   interviews: state.interviews,
   notes: state.notes
  };
};
export default connect(mapStateToProps)(InterviewList);

