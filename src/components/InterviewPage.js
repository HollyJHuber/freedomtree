import React from 'react';
import { connect } from 'react-redux';

import History from './History';
import List from './List';
import Query from './Query';

const InterviewPage = (props) => (
  <div className="interview__container">
    {props.data.data !== 'what' && <History {...props.data}/> }
    <h1 className="interview__question">{props.data.question}</h1>
    <h4 className="interview__instruction">{props.data.instruction}</h4>
    {props.data.kind === "list" ?
      props.data.list.map((item) => ( 
        <List key={item.id} {...item}/> 
      )) :
      props.data.query.filter(item => item.parentId === props.data.dropdownId).map(item => (
        <Query key={item.id} {...item}/>
      ))
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps)(InterviewPage);