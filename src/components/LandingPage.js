import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Hero from './Hero';

const LandingPage = (props) => (

  <main className="landingPage__background"> 

      <Hero />
      <Link to={{
        pathname: `/interview/0`,
        state: {
          id: 0,
          counter: 0
        }
      }}>
      <div className="landingPage__buttonBox">
        <button className="landingPage__button"> Get Started </button>
      </div>
      </Link>
      

  </main>

)

export default connect ()(LandingPage);
