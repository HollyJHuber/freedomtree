import React from 'react';

const Query = ({id, notation, text, parentId }) => (
  <div className= "list__queryContainer">
    <div className="list__queryListing">
      {text}
    </div>
  </div>
);

export default Query;
