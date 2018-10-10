import React from 'react';
import { connect } from 'react-redux';

import Dropdown from './Dropdown';
import { selectListId } from '../actions/notes';

  const List = (props) => (
  <div 
    className={
      props.notes.listId === props.id ? 
        "list__listing list__listingSelected": "list__listing"
    }
    onClick= {() => {
      props.dispatch(selectListId(props.id, props.notation));
      }}
  >
    <div className="list__col1">
      <i className={props.icon}></i>
    </div>
    <div className="list__col2">
      {props.content}
      {
        (props.notes.listId === props.id) && (
          <ul className="list__dropDownItem">
          {
            props.data.dropdown.filter(item => item.parentId === props.id).map(item => (
              <Dropdown key={item.id} {...item}/>
            ))
          }
          </ul>
        )
      }
    </div>
  </div>
);
const mapStateToProps = (state) => {
  return {
    data: state.data,
    notes: state.notes
  }
}
export default connect(mapStateToProps)(List);

