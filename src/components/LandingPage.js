import React from 'react';
import { connect } from 'react-redux';

import Hero from './Hero';

const LandingPage = (props) => (
  <div>
    <Hero />
      <div>
        <button 
          onClick= {() => {
            props.history.push('/interview');
          }}
        >
          Start Here
        </button>
        <button>Watch Video</button>
      </div>
  </div>
);

export default connect ()(LandingPage);
