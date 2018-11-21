import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startSelectDropdown } from '../actions/data';

const Dropdown = ({ dispatch, id, notation, content, flag}) => (
  <Link to={{
    pathname: `/consult/${id}`,
    state: {
      myId: id,
      myNotation: notation,
      myContent: content,
      myFlag: flag
    }
  }}>
  <li
    onClick = {() => {
      dispatch(startSelectDropdown(id, notation, content, flag));
    }}
  >
    {content} 
  </li>
  </Link>
);
const mapStateToProps = (state) => {
  return {
    data: state.data,
    state: state.router.location.state
  }
}
export default connect(mapStateToProps)(Dropdown);