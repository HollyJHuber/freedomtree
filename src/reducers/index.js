import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import dataReducer from './data';

const rootReducer = (history) => combineReducers ({
  data: dataReducer,
  router: connectRouter(history)
});

export default rootReducer;