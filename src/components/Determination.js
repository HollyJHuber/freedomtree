import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import InterviewInfo from './InterviewInfo';

const Determination = (props) => {
  let counter = props.location.state.counter
  if(props.data.interview[counter].kind === "dropdown"){
    counter = counter -1;
  }
  const interview = props.data.interview[counter];
  const currentData = interview.data;

  return (
  <main>

    {props.data.determination && 
      <div className="determination__container">
        <div className="determination__box">
          <h1 className="determination__question">{props.data.question}</h1>
          <h4 className="determination__instruction">{props.data.instruction}</h4>
          <hr></hr>
          { props.data.myData.map((item) => (
              <InterviewInfo key={item.counter} {...item} />
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

export default connect(mapStateToProps)(Determination);