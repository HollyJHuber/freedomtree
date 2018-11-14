import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';
import InterviewPage from '../components/InterviewPage';
import Loading from '../components/Loading';
import TestPage from '../components/Test';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFound';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}> 
  <article>
    <NavBar />
    <Switch>
      <Route path="/" component={LandingPage} exact={true} />
      <Route path="/interview/" component={InterviewPage} />
      <Route path="/loading" component={Loading} />
      <Route path="/test" component={TestPage} />
      <Route component={NotFoundPage}/>
    </Switch>
    <Footer />
  </article>
</Router>
);

export default AppRouter;