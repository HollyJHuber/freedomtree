import React from 'react';

const Query = ({id, notation, text, parentId }) => (
  <div className= "issue__queryContainer">
    <div className="issue__queryListing">
      {text}
    </div>
  </div>
);

export default Query;
