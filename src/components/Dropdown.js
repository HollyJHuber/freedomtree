import React from 'react';
import { connect } from 'react-redux';

import { startSelectDropdown } from '../actions/data';

const Dropdown = (props) => (
  <li
    onClick = {() => {
      props.dispatch(startSelectDropdown(props.id, props.notation, props.content));
    }}
  >
    {props.content}
  </li>
);
const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}
export default connect(mapStateToProps)(Dropdown);