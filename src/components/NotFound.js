import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <div>
    <p>404 Page Not Found! <Link to="/">Go to homepage</Link></p>
  </div>
);

export default NotFoundPage;