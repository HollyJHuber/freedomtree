import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import FreedomTreeApp from '../components/FreedomTreeApp'
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter> 
  <div>
    <Switch>
      <Route path="/" component={FreedomTreeApp} exact={true} />
      <Route component={NotFoundPage}/>
    </Switch>
    <Footer />
  </div>
</BrowserRouter>
);

export default AppRouter;