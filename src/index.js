import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import 'core-js/stable';
import "core-js/features/string/repeat";
import assign from 'core-js/features/object/assign';
import 'core-js/features/string/virtual/replace-all';
import 'promise-polyfill/src/polyfill';
import 'unfetch/polyfill';
import 'abortcontroller-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import rootReducer from './reducers';

Object.assign = assign;

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware({ immutableCheck: false, serializableCheck: false })],
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
