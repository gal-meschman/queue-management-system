import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from './App';
import reducer from "./store/reducer";
import "bootstrap/dist/css/bootstrap.min.css";

const myStore = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
  <Provider store={myStore}>
    <App />
  </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);