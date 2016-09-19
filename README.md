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

### Preparing Redux containers in React
In order for us to pass state variables or emit actions through a component, we need to use the mapStateToProps and mapDispatchToProps functions using React-Redux' connect function. mapStateToProps is a function that is passed the state as a parameter and returns an object with values that are state variables. mapDispatchToProps is a function that is passed the dispatch as a parameter and returns an object with functions that employ the dispatch function. Both functions can be null as a component can be "connected" but without passing the state or any functions using dispatch to it.

We use the connect function like this:
```javascript

connect(
	mapStateToProps,
	mapDispatchToProps
)(Component);

```

## Project specifications
### How AJAX calls are performed in this project
To make AJAX calls, we use Axios, which is a lightweight library that employs ES6 Promises. To load data from the server we usually emit an action to clear the state variable to be changed and then, once we've received the data, we emit another action with the data to update the state.