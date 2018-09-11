import { createStore, combineReducers } from 'redux';

import interviewsReducer from '../reducers/interviews';
import dataReducer from '../reducers/data';
import notesReducer from '../reducers/notes';

export default () => {
  const store = createStore(
    combineReducers({
      interviews: interviewsReducer,
      data: dataReducer,
      notes: notesReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  
  return store;
};

