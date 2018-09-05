import { createStore, combineReducers } from 'redux';

import interviewsReducer from '../reducers/interviews';
import dataReducer from '../reducers/data';

export default () => {
  const store = createStore(
    combineReducers({
      interviews: interviewsReducer,
      data: dataReducer
    })
  );
  
  return store;
};

