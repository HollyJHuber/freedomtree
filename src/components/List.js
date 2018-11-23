import React from 'react';
import { connect } from 'react-redux';

import Dropdown from './Dropdown';
import Loading from './Loading';
import { selectListId, startDetermination, showLoading } from '../actions/data';

  const List = (props) => (
    props.data.loading ? <Loading /> : 
    <div 
      className={
        props.data.listId === props.id ? 
          "list__listing list__listingSelected": "list__listing"
      }
      onClick= {() => {
        if (props.currentData=="whos") {
          props.dispatch(showLoading());
          setTimeout(() => {
            props.dispatch(startDetermination(props.id, props.notation, props.content, props.flag)) 
          }, 2000);
        } else {
          props.dispatch(selectListId(props.id, props.notation, props.content, props.flag))
        }
      }}
    >
    <div className="list__col1">
      <i className={props.icon}></i>
    </div>
    <div className="list__col2">
      {props.content}
      {
        (props.data.listId === props.id) && (
          <ul className="list__dropDownItem">
          {
            props.data.dropdown.filter(item => item.parentId === props.id).map(item => (
              <Dropdown key={item.id} {...item} counter = {props.counter}/>
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
    data: state.data
  }
}
export default connect(mapStateToProps)(List);

