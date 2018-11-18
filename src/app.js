import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import React from 'react';
import ReactDOM from 'react-dom';
import rootReducer from './reducers';

import AppRouter from './routers/AppRouter';
import Loading from './components/Loading';
import { startSetData } from './actions/data';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer(history),
  composeEnhancer(
    applyMiddleware(
      routerMiddleware(history),
      thunk,
    ),
  ),
);

  const jsx = (
    <Provider store={store}>
      <AppRouter history={history}/>
    </Provider>
  );

ReactDOM.render(<Loading />, document.getElementById('app'));

store.dispatch(startSetData()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

