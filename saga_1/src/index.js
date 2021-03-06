import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { applyMiddleware, createStore } from 'redux';
import reducer from './Reducer/reducer';
import createSagaMiddleware from '@redux-saga/core';
import { withdraw } from './saga/saga';
import { Provider } from 'react-redux';


const sagaMiddleware = createSagaMiddleware();
// sagaMiddleware.run(withdraw)


const store = createStore(reducer, applyMiddleware(sagaMiddleware))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
