import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { startSetData } from './actions/data';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

  const jsx = (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );

ReactDOM.render(<p>Loading ...</p>, document.getElementById('app'));

store.dispatch(startSetData()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

