import React from 'react';
import { Link } from 'react-router-dom';

import Footer from '../components/Footer';

const NotFoundPage = () => (
  <main>
    <div className="interview__container">
      <h1 className="interview__question">Page Not Found</h1>
      <h1><Link to="/">Go to homepage</Link></h1>
    </div>
  </main>
);

export default NotFoundPage;