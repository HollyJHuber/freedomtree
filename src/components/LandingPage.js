import React from 'react';
import { connect } from 'react-redux';

import Hero from './Hero';

const LandingPage = (props) => (
  <div className="landingPage__container"
    onClick= {() => {
    props.history.push('/interview');
  }}> 
    <Hero />
      <div className="landingPage__buttonBox">
        <button className="landingPage__button"> Get Started </button>
      </div>
  </div>
);

export default connect ()(LandingPage);
