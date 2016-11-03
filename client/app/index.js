import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from "./store/store";

import {Router, Route, IndexRoute, hashHistory} from "react-router";

//import specific app components
import ContentContainer from "./containers/ContentContainer";
import Widgets from "./components/Widgets";
import UsersBootstrapTable from "./components/UsersBootstrapTable";
import UsersFixedDataTable2 from "./components/UsersFixedDataTable2";
import UsersResponsiveFixedDataTable2 from "./components/UsersResponsiveFixedDataTable2";
import UserManagement from "./components/UserManagement";
import UserManagementWithTooltips from "./components/Tooltip/UserManagementWithTooltips";
import DynamicFormPage from "./components/DynamicFormPage";
import App from "./components/App";

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ContentContainer}/>
                <Route path="/widgets" component={Widgets}/>
                <Route path="/usermanager" component={UserManagement}/>
                <Route path="/usermanagertooltip" component={UserManagementWithTooltips}/>
                <Route path="/grids/bootstrap" component={UsersBootstrapTable}/>
                <Route path="/grids/fixed-data-table-2" component={UsersFixedDataTable2}/>
                <Route path="/grids/responsive-fixed-data-table-2" component={UsersResponsiveFixedDataTable2}/>
                <Route path="/forms/dynamic" component={DynamicFormPage}/>
                <Route path="/content/:contentId" component={ContentContainer}/>
            </Route>
        </Router>
    </Provider>
    , document.getElementById("app"));