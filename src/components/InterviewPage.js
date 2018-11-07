import React from 'react';
import { connect } from 'react-redux';

import History from './History';
import List from './List';
import Query from './Query';
import Determination from './Determination';

const InterviewPage = (props) => (

  <div>
    {!props.data.determination &&
      <div className="interview__container">
      { (props.data.currentData !== 'whats' || props.data.kind !== 'list')
        && props.data.myData.map((myDataItem, index) => (
          myDataItem.map((item) => (
            <History key={item.id} {...item} counter={props.data.counter}/>
          ))
        ))
      }
      <h1 className="interview__question">{props.data.question}</h1>
      {(props.data.currentData !== "wheres" || props.data.kind !== "query") 
        && <h4 className="interview__instruction">{props.data.instructionA}</h4>}
      {(!!props.data.instructionB && props.data.currentData === 'wheres' && props.data.kind === 'query')
        && <h4 className="interview__instruction">{props.data.instructionB}</h4>}
      {(props.data.kind === "list" ?
        props.data.list.map((item) => ( 
          <List key={item.id} {...item} currentData={props.data.currentData}/> 
        )) :
        props.data.query.filter(item => item.parentId === props.data.dropdownId).map(item => (
          <Query key={item.id} {...item}/>
        ))
      )}
      </div>}

      {props.data.determination 
    && <div className="determination__container">
      <div className="determination__box">
        <h1 className="determination__question">{props.data.question}</h1>
        <h4 className="determination__instruction">{props.data.instructionA}</h4>
        { props.data.myData.map((myDataItem, index) => (
            myDataItem.map((item) => (
            <Determination key={item.id} {...item} />
            ))
          ))
        }
        <h4 className="determination__notation">Does this information accurately represent your complaint?</h4>
        <div className="determination__buttonBox">
          <button className="determination__button" onClick= {() => alert("Coming Soon!")}>YES<br />Sign Up</button> &nbsp;
          <button className="determination__button"onClick= {() => location.reload()}>NO<br />Start Over</button>
        </div>
      </div>
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