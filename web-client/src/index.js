import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from "./reducers/index.js";
import {
  setActionTemplate,
  addText,
  addText2
} from './actions';


let initialStore = {

};

const store = createStore(rootReducer, initialStore);
export default store;

//
// Log the initial state
// console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// Dispatch some actions
store.dispatch(addText('Learn about actions'))
store.dispatch(addText('Learn about reducers again'))
store.dispatch(addText2('Learn about reducers 2'))
store.dispatch(setActionTemplate('Learn about store'))
// console.log(store.getState());
// Stop listening to state updates
// unsubscribe()
//



ReactDOM.render(
  <Provider store={store}>
      <Router>
        <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

registerServiceWorker();

