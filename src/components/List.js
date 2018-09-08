import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import Query from './Query';
import bySelectedId from '../selectors/data';

const List = (props) => (
  <div className="interview__container">
    <h1 className="interview__question">{props.data.question}</h1>
    <h4 className="interview__instruction">{props.data.instruction}</h4>
    {props.data.currentType === "list" ?
      props.data.list.map((item) => {
        return <ListItem key={item.id} {...item}/>
      }) :
      props.data.query.filter(item => item.itemId === props.filters.selectedId).map(item => (
        <Query key={item.id} {...item}/>
      ))
    }
  </div>
  );

  const mapStateToProps = (state) => {
    return {
      data: state.data,
      filters: state.filters
    }
  };

export default connect(mapStateToProps)(List);