import React from 'react';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';

import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';
import InterviewPage from '../components/InterviewPage';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
  <BrowserRouter> 
  <div>
    <NavBar />
    <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/interview" component={InterviewPage} />
      <Route component={NotFoundPage}/>
    </Switch>
    <Footer />
  </div>
</BrowserRouter>
);

export default AppRouter;