import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
// import { newIssue } from './actions/interviews';
// import getStatus from './selectors/interviews';
//import { testNotes } from './actions/notes';
import { startSetData } from './actions/data';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(newIssue(
//   { 
//     history: 'Issues > Speech', 
//     issueId: 1001, 
//     issueText: 'Speech', 
//     itemId: 2005, 
//     itemText: 'Pledge of Allegiance',
//   }
// ));

//   const state = store.getState();
//   const status = getStatus(state.interviews, state.notes);
//   console.log(status);

  const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetData()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

