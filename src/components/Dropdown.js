import React from 'react';
import { connect } from 'react-redux';

import { selectDropdownId } from '../actions/filters';

const Dropdown = (props) => (
  <li
    onClick = {(e) => {
      console.log(props.id);
      props.dispatch(selectDropdownId(props.id));
    }}
  >
    {props.text}
  </li>
);
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
export default connect(mapStateToProps)(Dropdown);