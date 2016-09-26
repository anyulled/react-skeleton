# React-Starter
A skeleton for React projects

## An introduction to Redux
Redux is a library whose purpose is to manage the (global) state of web applications. They way it does so is by storing the whole state of the application within a single store.

The state of a Redux application can only be changed by emitting an action, which describes what just happened. The state is not modified but updated, its changes are handled by pure functions the previous state and an action and return the next state, NEVER mutating the previous state.

### Actions
Actions are payloads of information that send data from the application to the store. They are the only source of information for the store. We send them to the store by dispatching them, using store.dispatch().

### Reducers
Reducers are what specifies how the application's state changes whenever actions are emitted. 
Redux is a functional reducer that gets the current state and each individual action as the input param and return a new state which is the result of applying this action to the current state.
**React-Redux** is a framework that offers two utilities for integrating redux with react:

- A `connect` function that links components to the redux store. This function retrieves a callback parameter that defines properties that will be passed to the component and each one will be mapped to state properties by context (thus saving us the task of passing the props down manually at every level).
- A `Provider` component. This is a parent component useful to pass store properties to its children components.

### Store
The store is the object that brings actions and reducers together. It has the following responsibilities: it holds the application state, allows access to the state via getState() and allows state to be updated via dispatch(action).

General workflow

- A component triggers an event.
- An action describing the event is created and dispatched.
- The action is passed to the reducer along with the current state.
- The dispatch calls the reducer with the current state and the action as parameters.
- The reducer checks the action type and creates a new state object.
- The store applies the new state to all components.
- The component is updated accordingly.

### Thunk
Thunk allows you to create action creators that not only return action objects but can do vaious other things, like calling other action objects or dispatching actions conditionally. When using redux-thunk, an action return a function like this:

```javascript
const thunkAction = () => {
  return (dispatch, getState) => {
    // here you may
    // dispatch other actions (more than one) using the provided dispatch() parameter
    // or
    // check the current state using the getState() parameter and do conditional dispatches
    // or
    // call functions asynchronously so that these will use the provided
    // dispatch function when they return
  }
}

```

### Creating a Redux fully functional container (a component "connected" to the store) in React, with the state variables/actions it works with

1. We need to create the React presentational component, which will be wrapped up by the container; this component should make use of the variables passed to it as props and not do anything with the state. The presentational component is stateless, which means it's not bound to the state. This step could be omitted as some containers (very few) like buttons, have very little to split up. 
2. Now the actions, exporting each function and each action type of constant. All actions must have a "type" property (it could be named otherwise but it's not a very good practice), which has to be a constant, containing the name of what's being done, usually a string.
3. Reducers come next, as they will reference the action type constants. Reducers always receive the same arguments the state and the action —in this order— and always return the new state without ever mutating the previous state object they were passed as a parameter, which is why reducers ALWAYS have to be a pure function.
4. The Redux container is just the presentational component, which has had certain state properties and dispatch functions passed as its props through the mapStateToProps and mapDispatchToProps functions respectively. Some containers don't have either any state properites or dispatch functions mapped to it (although to be considered a Redux container they should have one of either).

It must be understood that in most cases, the reducers and the actions are usually completely unrelated to the container and could be employed by an entirely different component. Even though, in some cases (which are more like the exception), we might need to define a reducer and actions for a particular component (for instance, a table whose rows can be sorted).

### Preparing Redux containers in React
In order for us to pass state variables or emit actions through a component, we need to use the **mapStateToProps** and **mapDispatchToProps** functions using React-Redux's **connect** function. 

- The `mapStateToProps` is a function that will be called whenever the store's state changes and should return an object whose attributes will be passed to the connected component as properties.
- The `mapDispatchToProps` is a function that return an object whose attributes will be passed to the connected component and will dispatch actions when called.

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