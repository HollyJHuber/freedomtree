import { createStore, combineReducers } from 'redux';

import interviewsReducer from '../reducers/interviews';
import notesReducer from '../reducers/notes';
import dataReducer from '../reducers/data';

export default () => {
  const store = createStore(
    combineReducers({
      interviews: interviewsReducer,
      notes: notesReducer,
      data: dataReducer
    })
  );
  
  return store;
};

