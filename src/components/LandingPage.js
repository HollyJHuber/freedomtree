import React from 'react';
import { connect } from 'react-redux';
import { startInterview } from '../actions/interviews';

import Hero from './Hero';

const LandingPage = ( { startInterview }) => (
  <div>
    <Hero />
      <div>
        <button onClick = {startInterview} >Start Here</button>
        <button>Watch Video</button>
      </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startInterview: () => dispatch(startInterview())
});

export default connect (undefined, mapDispatchToProps)(LandingPage);
