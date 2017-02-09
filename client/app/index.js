import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import store from "./store/store";


import {Router, Route, IndexRoute, hashHistory} from "react-router";

//import specific app components
import ContentContainer from "./containers/ContentContainer";
import CustomMultiselectContainer from "./containers/CustomMultiselectContainer";
import CollapsiblePane from "./components/CollapsiblePane";
import Widgets from "./components/Widgets";
import UsersBootstrapTable from "./components/UsersBootstrapTable";
import UsersFixedDataTable2 from "./components/UsersFixedDataTable2";
import UsersResponsiveFixedDataTable2 from "./components/UsersResponsiveFixedDataTable2";
import UserManagement from "./components/UserManagement";
import UserManagementWithTooltips from "./components/Tooltip/UserManagementWithTooltips";
import DynamicFormPage from "./components/DynamicFormPage";
import App from "./components/App";
import ReduxSamplePage from "./containers/reduxSample/ReduxSamplePage";
import AutosuggestExample from "./components/Form/Autosuggest";
import AutocompleteExample from "./components/Form/Autocomplete";

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={ContentContainer}/>
                <Route path="/collapsiblepane" component={CollapsiblePane}/>
                <Route path="/widgets" component={Widgets}/>
                <Route path="/customMultiselect" component={CustomMultiselectContainer}/>
                <Route path="/usermanager" component={UserManagement}/>
                <Route path="/usermanagertooltip" component={UserManagementWithTooltips}/>
                <Route path="/grids/bootstrap" component={UsersBootstrapTable}/>
                <Route path="/grids/fixed-data-table-2" component={UsersFixedDataTable2}/>
                <Route path="/grids/responsive-fixed-data-table-2" component={UsersResponsiveFixedDataTable2}/>
                <Route path="/forms/dynamic" component={DynamicFormPage}/>
                <Route path="/reduxSample" component={ReduxSamplePage}/>
                <Route path="/content/:contentId" component={ContentContainer}/>
                <Route path="/autosuggest" component={AutosuggestExample}/> 
                <Route path="/autocomplete" component={AutocompleteExample}/> 
            </Route>
        </Router>
    </Provider>
    , document.getElementById("app"));