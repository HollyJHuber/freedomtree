import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startSelectQuery } from '../actions/data';

const Query = ({ dispatch, id, notation, content, flag }) => (
  <div>
    <Link to={{
      pathname: '/consult/1',
      state: {
        myId: id,
        myNotation: notation,
        myContent: content,
        myFlag: flag
      }
    }}>
      <div className= "list__queryContainer">
        <div 
          className="list__queryListing"
          onClick= {() => { dispatch(startSelectQuery(id, notation, content, flag)) }}
        >
          {content}
        </div>
      </div>
    </Link>
  </div>
);

export default connect()(Query);
