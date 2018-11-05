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
        myDataItem.map((item) => (
          <History key={item.id} {...item} counter={props.data.counter}/>
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

    {(props.data.determination 
      && props.data.myData.map((myDataItem, index) => (
        myDataItem.map((item) => (
          <Determination key={item.id} {...item} />
        ))
      ))
    )}
    {props.data.determination && <div>
        <h4 className="interview__instruction">Does this information accurately represent your complaint?</h4>
          <button onClick= {() => alert("Coming Soon!")}>YES<br />Sign Up</button>&nbsp;
          <button onClick= {() => location.reload()}>NO<br />Start Over</button>
      </div>
    }
  </div>
);

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps)(InterviewPage);