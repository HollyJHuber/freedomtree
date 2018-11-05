import React from 'react';
import { connect } from 'react-redux';

const Determination = (props) => (
  <div className="determination__data"> 
    {(props.kind === "dropdown") && ` > `} 
    {(props.kind === "query") && <br />}
    {props.content}
    {(props.kind === "query" ) && <br />}
  </div>
);

export default connect()(Determination);
