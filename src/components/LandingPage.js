import React from 'react';
import { connect } from 'react-redux';

import Hero from './Hero';

const LandingPage = (props) => (
  <main className="landingPage__background"
    onClick= {() => {
    props.history.push('/interview');
  }}> 
    <Hero />
      <div className="landingPage__buttonBox">
        <button className="landingPage__button"> Get Started </button>
      </div>
  </main>
);

export default connect ()(LandingPage);
