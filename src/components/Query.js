import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startSelectQuery } from '../actions/data';

const Query = ({ dispatch, id, notation, content, flag, counter, currentData, listId}) => {
  // console.log(`counter: ${counter}`);
  // counter++;
  // console.log(`counter: ${counter}`);
  let pathNo = counter + 1;
  if(currentData === "wheres"){
    pathNo = listId;
  }
  return (
    <Link to={{
      pathname: `/interview/${pathNo}`,
      state: {
        id: id,
        counter: counter + 1
      }
    }}>
        <div className= "list__queryContainer">
          <div 
            className="list__queryListing"
            onClick= {() => {
              { dispatch(startSelectQuery(id, notation, content, flag))}
            }}
          >
            {content}
          </div>
        </div>
    </Link>
  )
};

export default connect()(Query);
