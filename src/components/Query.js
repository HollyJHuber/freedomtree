import React from 'react';
import { connect } from 'react-redux';

import { startSelectQuery } from '../actions/data';

const Query = ({ dispatch, id, notation, content, flag }) => (
  <div className= "list__queryContainer">
    <div 
      className="list__queryListing"
      onClick= {() => { dispatch(startSelectQuery(id, notation, content, flag)) }}
    >
      {content}
    </div>
  </div>
);

export default connect()(Query);
