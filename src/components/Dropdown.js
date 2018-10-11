import React from 'react';
import { connect } from 'react-redux';

import { selectDropdownId } from '../actions/notes';

const Dropdown = (props) => (
  <li
    onClick = {() => {
      props.dispatch(selectDropdownId(props.id, props.notation));
    }}
  >
    {props.content}
  </li>
);
const mapStateToProps = (state) => {
  return {
    data: state.data,
    notes: state.notes
  }
}
export default connect(mapStateToProps)(Dropdown);