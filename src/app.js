import React from 'react';
import ReactDOM from 'react-dom';

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { newIssue } from './actions/interviews';
import { makeSelection } from './actions/interviews';
import getStatus from './selectors/interviews';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(newIssue({ history: 'Issues > Speech', issueId: 1001, issueText: 'Speech', itemId: 2005, itemText: 'Pledge of Allegiance'}));

  const state = store.getState();
  const status = getStatus(state.interviews, state.notes);
  console.log(status);


ReactDOM.render(<AppRouter />, document.getElementById('app'));