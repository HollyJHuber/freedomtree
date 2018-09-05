import React from 'react';
import { connect } from 'react-redux';

import ListItem from './ListItem';

const List = (props) => (
  <div className="interview__container">
    <h1 className="interview__question">{props.data.question}</h1>
    <h4 className="interview__instruction">{props.data.instruction}</h4>
    <p>{props.notes.currentData} (testing!)</p>
    {props.data.list.map((item) => {
      return <ListItem key={item.id} {...item}/>
    })}
  </div>
  );

  const mapStateToProps = (state) => {
    return {
      notes: state.notes,
      data: state.data
    };
  };

export default connect(mapStateToProps)(List);

/*
const categories = ["List", "What's Happening?", "Select the issue that best describes your situation:",
  [
    { id: 100, notation: "Discrimination", icon: "fas fa-users", text: "Discrimination"},
    { id: 101, notation: "Bullying", icon: "fas fa-child", text: "Bullying"},
    { id: 102, notation: "Sexual Harassment", icon: "fas fa-hand-rock", text: "Sexual Harassment"},
    { id: 103, notation: "LGBTQ", icon: "fas fa-transgender-alt", text: "LGBTQ"},
    { id: 104, notation: "Religion", icon: "fas fa-church", text: "Religion"},
    { id: 105, notation: "Speech", icon: "fas fa-bullhorn", text: "Speech"},
    { id: 106, notation: "Protest/Assembly", icon: "fas fa-newspaper", text: "Protest/Assembly"},
    { id: 107, notation: "Disability", icon: "fab fa-accessible-icon", text: "Disability"},
    { id: 108, notation: "Health & Safety", icon: "fas fa-medkit", text: "Health & Safety"},
    { id: 109, notation: "Police", icon: "fas fa-exclamation-triangle", text: "Police"},
    { id: 110, notation: "Emergency", icon: "fas fa-ambulance", text: "Emergency (Call 911)" },
    { id: 111, notation: "Other Issue", icon: "fas fa-question", text: "Other"}
  ]
];

const type = categories[0];
const question = categories[1];
const instruction = categories[2];
const lists = categories[3];
*/