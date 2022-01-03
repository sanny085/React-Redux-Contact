import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import "react-toastify/dist/ReactToastify.css";

import {combineReducers} from 'redux'
import { createStore } from "redux";
import { Provider } from "react-redux";

import { composeWithDevTools } from "redux-devtools-extension";

import { PersistGate } from 'redux-persist/integration/react'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { contactReducer } from "./redux/reducers/contactReducer";
 

// const root = () => combineReducers({
//   contactReducer,
// })

// const persistConfig = {
//   key: 'CrudRoot',
//   storage,
// }
// const persistedReducer = persistReducer(persistConfig, root)

let store = createStore(contactReducer)
//let persistor = persistStore(store)

 
ReactDOM.render(
  <Provider store={store}>
  {/* <PersistGate loading={null} persistor={persistor}> */}
    <Router>
      <App />
    </Router>
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById("root")
);
