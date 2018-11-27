import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import AppRouter from './routers/AppRouter';
import Loading from './components/Loading';
import configureStore from './store/configureStore';
import { startGetData } from './actions/data';
import './firebase/firebase';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

  const jsx = (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );

ReactDOM.render(<Loading />, document.getElementById('app'));

store.dispatch(startGetData()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});

