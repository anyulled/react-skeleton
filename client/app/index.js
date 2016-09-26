import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from "./store/store";


import {Router, Route, IndexRoute, hashHistory} from "react-router";

//import specific app components
import ContentContainer from "./containers/ContentContainer";
import Widgets from "./components/Widgets";
import Users from "./components/Users";
import UserManagement from "./components/UserManagement";
import App from "./components/App";

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ContentContainer}/>
                <Route path="/widgets" component={Widgets}/>
                <Route path="/usermanager" component={UserManagement}/>
                <Route path="/users" component={Users}/>
                <Route path="/content/:contentId" component={ContentContainer}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("app"));