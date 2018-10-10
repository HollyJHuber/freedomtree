import React from 'react';
import { connect } from 'react-redux';

import { selectQueryId } from '../actions/notes';

const Query = ({ dispatch, id, notation, content, parentId }) => (
  <div className= "list__queryContainer">
    <div 
      className="list__queryListing"
      onClick= {() => { dispatch(selectQueryId(id, notation)) }}
    >
      {text}
    </div>
  </div>
);

export default connect()(Query);
