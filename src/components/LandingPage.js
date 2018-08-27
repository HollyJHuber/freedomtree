import React from 'react';
import { Link } from 'react-router-dom';

import Hero from './Hero';

const LandingPage = () => (
  <div>
    <Hero />
    <Link to="/issues">
      <button>Start Here</button>
    </Link>
    <button>Watch Video</button>
  </div>
);

export default LandingPage;