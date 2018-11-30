import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { startSelectDropdown } from '../actions/data';

const Dropdown = ({ dispatch, id, notation, content, flag, counter, currentData}) => (
  <Link to={{
    pathname: `/interview/${id}`,
    state: {
      id: id,
      counter: counter + 2
    }
  }}>
  <li
    onClick = {() => {
      dispatch(startSelectDropdown(id, notation, content, flag, counter, currentData));
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