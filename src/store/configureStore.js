import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import interviewsReducer from '../reducers/interviews';
import dataReducer from '../reducers/data';
import notesReducer from '../reducers/notes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      interviews: interviewsReducer,
      data: dataReducer,
      notes: notesReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );
  return store;
};

