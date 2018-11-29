import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../store/configureStore';

import NavBar from '../components/NavBar';
import LandingPage from '../components/LandingPage';
import InterviewPage from '../components/InterviewPage';
import Loading from '../components/Loading';
import Footer from '../components/Footer';
import NotFoundPage from '../components/NotFound';

const AppRouter = () => (
  <ConnectedRouter history={history}> 
    <article>
      <NavBar />
      <Switch>
        <Route path="/" component={LandingPage} exact={true} />
        <Route path="/interview/:id" component={InterviewPage} />
        <Route path="/loading" component={Loading} />
        <Route component={NotFoundPage}/>
      </Switch>
      <Footer />
    </article>
  </ConnectedRouter>
);

export default AppRouter;