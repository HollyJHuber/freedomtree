import { createStore, combineReducers } from 'redux';

import interviewsReducer from '../reducers/interviews';
import notesReducer from '../reducers/notes';

export default () => {
  const store = createStore(
    combineReducers({
      interviews: interviewsReducer,
      notes: notesReducer
    })
  );
  
  return store;
};

