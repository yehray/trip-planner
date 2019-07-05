// import { createStore } from 'redux'
// import rootReducer from './reducers'

// import {
//   setActionTemplate,
//   addText
// } from '../actions';


// const store = createStore(rootReducer)

// // Log the initial state
// console.log(store.getState())

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// // Dispatch some actions
// store.dispatch(addText('Learn about actions'))
// store.dispatch(addText('Learn about reducers'))
// store.dispatch(addText('Learn about store'))

// // Stop listening to state updates
// unsubscribe()