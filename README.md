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

### Creating a Redux fully functional container (a component "connected" to the store) in React, with the state variables/actions it works with
1. We need to create the React presentational component, which will be wrapped up by the container; this component should make use of the variables passed to it as props and not do anything with the state. The presentational component is stateless, which means it's not bound to the state. This step could be omitted as some containers (very few) like buttons, have very little to split up. 
2. Now the actions, exporting each function and each action type of constant. All actions must have a "type" property (it could be named otherwise but it's not a very good practice), which has to be a constant, containing the name of what's being done, usually a string.
3. Reducers come next, as they will reference the action type constants. Reducers always receive the same arguments the state and the action —in this order— and always return the new state without ever mutating the previous state object they were passed as a parameter, which is why reducers ALWAYS have to be a pure function.
4. The Redux container is just the presentational component, which has had certain state properties and dispatch functions passed as its props through the mapStateToProps and mapDispatchToProps functions respectively. Some containers don't have either any state properites or dispatch functions mapped to it (although to be considered a Redux container they should have one of either).
It must be understood that in most cases, the reducers and the actions are usually completely unrelated to the container and could be used by an entirely differenty component. Even though, in some cases (which are more like the exception), we might need to define a reducer and actions for a particular component.

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