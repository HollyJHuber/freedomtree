import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import History from './History';
import List from './List';
import Query from './Query';
import Determination from './Determination';

const InterviewPage = (props) => {
  const counter = props.location.state.counter
  const interview = props.data.interview[counter];
  const currentData = interview.data;
  return (
  <main>
    {!props.data.determination &&
      <div className="interview__container">
        <div className = "history__container">
          { (currentData !== 'whats' || interview.kind !== 'list')
            && props.data.myData.map((item) => (
                  <History key={item.id} {...item}/>
            ))
          }
        </div>
        <h1 className="interview__question">
          {!!interview.question ? interview.question : props.data.dropdownNotation}
        </h1>
        <h4 className="interview__instruction">{interview.instruction}</h4>
        {(props.match.params.id < 10000 ? 
          currentData === 'whos' ? 
            interview.info.filter(item => item.parentId == props.match.params.id).map(item => (
              <List key={item.id} {...item} currentData={currentData} counter={counter}/> 
            )) :
            interview.info.map((item) => ( 
              <List key={item.id} {...item} currentData={currentData} counter={counter}/> 
          )) :
          interview.info.filter(item => item.parentId == props.match.params.id).map(item => (
            <Query key={item.id} {...item} counter={counter} currentData={currentData} listId={props.data.listId}/>
          ))
        )}
      </div>
    }

    {props.data.determination && 
      <div className="determination__container">
        <div className="determination__box">
          <h1 className="determination__question">{props.data.question}</h1>
          <h4 className="determination__instruction">{props.data.instructionA}</h4>
          <hr></hr>
          { props.data.myData.map((item) => (
              <Determination key={item.id} {...item} />
            ))
          }
          <hr></hr>
          <h4 className="determination__notation">Does this information accurately represent your complaint?</h4>
          <div className="determination__buttonBox">
            <button className="determination__button" onClick= {() => alert("Coming Soon!")}>YES<br />Sign Up</button>
            <Link to={{
              pathname: `/interview/0`,
              state: {
                id: 0,
                counter: 0
              }
            }}>
            <button className="determination__button"onClick= {() => location.reload()}>NO<br />Start Over</button>
            </Link>
          </div>
        </div>
      </div>
    }
  </main>
)};

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps)(InterviewPage);