import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import Query from './Query';

const List = (props) => (
  <div className="interview__container">
    <h1 className="interview__question">{props.notes.question}</h1>
    <h4 className="interview__instruction">{props.notes.instruction}</h4>
    {props.notes.kind === "list" ?
      props.data.list.map((item) => {
        return <ListItem key={item.id} {...item}/>
      }) :
      props.data.query.filter(item => item.parentId === props.notes.dropdownId).map(item => (
        <Query key={item.id} {...item}/>
      ))
    }
  </div>
  );

  const mapStateToProps = (state) => {
    return {
      data: state.data,
      notes: state.notes
    }
  };

export default connect(mapStateToProps)(List);