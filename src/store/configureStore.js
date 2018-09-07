import { createStore, combineReducers } from 'redux';

import interviewsReducer from '../reducers/interviews';
import dataReducer from '../reducers/data';
import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      interviews: interviewsReducer,
      data: dataReducer,
      filters: filtersReducer
    })
  );
  
  return store;
};

