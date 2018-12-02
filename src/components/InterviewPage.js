import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import History from './History';
import List from './List';
import Query from './Query';

const InterviewPage = (props) => {
  let counter = props.location.state.counter
  if(props.data.interview[counter].kind === "dropdown"){
    counter = counter -1;
  }
  const interview = props.data.interview[counter];
  const currentData = interview.data;

  return (
  <main>
    <div className="interview__container">
      <div className = "history__container">
        { (currentData !== 'whats' || interview.kind !== 'list')
          && props.data.myData.filter(item => item.counter < counter).map(item => (
              <History key={item.id} {...item}/>
          ))
        }
      </div>
      <h1 className="interview__question">
        {!!interview.question ? interview.question : 
          (props.data.myData.length > 1 && props.data.myData[counter-1].notation)}
      </h1>
      <h4 className="interview__instruction">{interview.instruction}</h4>
      {(props.match.params.id < 10000 ? 
        currentData === 'whos' ? 
          interview.info.filter(item => item.parentId == props.match.params.id).map(item => (
            <Link to={{
              pathname: `/determination`,
              state: {
                id: 0,
                counter: 7
              }
            }}>
            <List key={item.id} {...item} currentData={currentData} counter={counter}/> 
            </Link>
          )) :
          interview.info.map((item) => ( 
            <List key={item.id} {...item} currentData={currentData} counter={counter}/> 
        )) :
        interview.info.filter(item => item.parentId == props.match.params.id).map(item => (
          <Query key={item.id} {...item} counter={counter} currentData={currentData} listId={props.data.listId}/>
        ))
      )}
    </div>
  </main>
)};

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
};

export default connect(mapStateToProps)(InterviewPage);