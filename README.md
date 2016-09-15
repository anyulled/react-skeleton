# React-Starter
A skeleton for React projects

## An introduction to Redux
Redux is a library whose purpose is to manage the (global) state of web applications. They way it does so is by storing the whole state of the application within a single store.

The state of a Redux application can only be changed by emitting an action, which describes what just happened. The state is not modified but updated, its changes are handled by pure functions the previous state and an action and return the next state, NEVER mutating the previous state.

### Actions
Actions are payloads of information that send data from the application to the store. They are the only source of information for the store. We send them to the store by dispatching them, using store.dispatch().

### Reducers
Reducers are what specifies how the application's state changes whenever actions are emitted.

### Store
The store is the object that brings actions and reducers together. It has the following responsibilities: it holds the application state, allows access to the state via getState() and allows state to be updated via dispatch(action).


## How AJAX calls are performed in this project
To make AJAX calls, we use Axios, which is a lightweight library that employs ES6 Promises. To load data from the server we usually emit an action to clear the state variable to be changed and then, once we've received the data, we emit another action with the data to update the state.