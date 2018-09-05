import React from 'react';

const ListItem = ({id, notation, icon, text }) => (
  <div className= "list__listing">
    <div className="list__col1">
      <i className={icon}></i>
    </div>
    <div className="list__col2">
      {text}
    </div>
  </div>
);

export default ListItem;
