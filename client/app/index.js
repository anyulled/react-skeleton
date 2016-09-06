import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from "./store/store";


import {Router, Route, hashHistory} from "react-router";

import "./assets/sass/main.scss";

//import specific app components
import GenericApp from "./components/GenericApp";
import PaginationExample from "./components/PaginationExample";
import Users from "./components/Users";
import App from "./components/App";

import Promise from "es6-promise";

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <Route component={GenericApp}/>
                <Route path="/pagination" component={PaginationExample}/>
                <Route path="/users" component={Users}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("app"));