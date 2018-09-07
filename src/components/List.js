import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';
import Query from './Query';
import bySelectedId from '../selectors/data';

const List = (props) => (
  <div className="interview__container">
    <h1 className="interview__question">{props.data.question}</h1>
    <h4 className="interview__instruction">{props.data.instruction}</h4>
    <p>{props.data.currentData} {props.data.selectedId} (testing!)</p>
    {props.data.currentType === "list" ?
      props.data.list.map((item) => {
        return <ListItem key={item.id} {...item}/>
      }) :
      props.data.query.map((item) => {
        return <Query key={item.id} {...item}/>
      })
    }
  </div>
  );

  const mapStateToProps = (state) => {
    return {
      data: (state.data)
    }
  };

export default connect(mapStateToProps)(List);