import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startSelectQuery } from '../actions/data';

const Query = ({ dispatch, id, notation, content, flag, counter }) => {
  counter++;
  return (
    <Link to={{
      pathname: `/consult/${counter}`,
      state: {
        myId: id,
        myNotation: notation,
        myContent: content,
        myFlag: flag,
        myCount: counter
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
