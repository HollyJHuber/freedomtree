import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';

const List = (props) => (
  <div className="interview__container">
    <h1 className="interview__question">{props.data.question}</h1>
    <h4 className="interview__instruction">{props.data.instruction}</h4>
    <p>{props.data.currentData} {props.data.selectedId}(testing!)</p>
    {props.data.list.map((item) => {
      return <ListItem key={item.id} {...item}/>
    })}
  </div>
  );

  const mapStateToProps = (state) => {
    return {
      data: state.data
    };
  };

export default connect(mapStateToProps)(List);