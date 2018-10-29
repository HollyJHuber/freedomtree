import React from 'react';
import { connect } from 'react-redux';

const Determination = ({ history }) => (
  <div className="list__queryListing">
    {history}
  </div>
);

export default connect()(Determination);
