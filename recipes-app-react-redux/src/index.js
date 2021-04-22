import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './app/App.js';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';

import { store } from './app/store';


  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <App state={store.getState()} dispatch={store.dispatch}/>
      </React.StrictMode>
    </Provider>
    ,
    document.getElementById('root')
  );

reportWebVitals();