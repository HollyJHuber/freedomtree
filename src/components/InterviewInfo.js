import React from 'react';
import { connect } from 'react-redux';

const InterviewInfo = (props) => (
  <div className="determination__data">
    {props.kind === "list" && 
      <div className="determination__inline">{props.content}</div>}
    {props.kind === "dropdown" && 
      <div className="determination__inline">  > {props.content} </div>}
    {props.kind==="query" &&
      <div className="determination__block"> {props.content} </div>}
  </div>
);

export default connect()(InterviewInfo);
