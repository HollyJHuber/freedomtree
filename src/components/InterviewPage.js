import React from 'react';
import { connect } from 'react-redux';

import History from './History';
import List from './List';
import Query from './Query';
import Determination from './Determination';

const InterviewPage = (props) => (
  <div className="interview__container">
    { (!props.data.determination && (props.data.currentData !== 'whats' || props.data.kind !== 'list'))
      && props.data.myData.map((myDataItem, index) => (
        (props.data.kind === "query" && (index === props.data.counter)) ? 
        // when query, omit last notation of last array
        myDataItem.map((item, index, myDataItem) => (
          (index != myDataItem.length-1) && <History key={item.id} {...item} counter={props.data.counter} kind={props.data.kind}/>
        ))
        : // map all notations
        myDataItem.map((item) => (
          <History key={item.id} {...item} counter={props.data.counter} kind={props.data.kind}/>
        ))
      ))
    }
    <h1 className="interview__question">{props.data.question}</h1>
    <h4 className="interview__instruction">{props.data.instruction}</h4>
    {!props.data.determination && (props.data.kind === "list" ?
      props.data.list.map((item) => ( 
        <List key={item.id} {...item} currentData={props.data.currentData}/> 
      )) :
      props.data.query.filter(item => item.parentId === props.data.dropdownId).map(item => (
        <Query key={item.id} {...item}/>
      ))
    )}
    {props.data.determination && <Determination {...props.data}/>}
  </div>
);

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps)(InterviewPage);