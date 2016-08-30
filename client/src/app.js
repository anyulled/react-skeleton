import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from "./store/store";

// import Promise from "es6-promise";

import {Router, Route, hashHistory} from "react-router";

//import specific app components
import GenericApp from "./components/GenericApp";
import Dashboard from "./components/Dashboard";

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={GenericApp}/>
            <Route path="/dashboard" component={Dashboard}/>
        </Router>
    </Provider>
    , document.getElementById("app"));