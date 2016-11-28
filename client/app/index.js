import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import store from "store/store";
import {Router, Route, IndexRoute, hashHistory} from "react-router";
import ContentContainer from "containers/ContentContainer";
import CollapsiblePane from "components/CollapsiblePane";
import Widgets from "components/Widgets";
import UsersBootstrapTable from "components/UsersBootstrapTable";
import UsersFixedDataTable2 from "components/UsersFixedDataTable2";
import UsersResponsiveFixedDataTable2 from "components/UsersResponsiveFixedDataTable2";
import UserManagement from "components/UserManagement";
import DynamicFormPage from "components/DynamicFormPage";
import App from "components/App";
import {AppContainer} from "react-hot-loader";

if (process.env.NODE_ENV == "production") {//eslint-disable-line no-undef
    console.log("you're in production, be careful"); //eslint-disable-line no-console
}

ReactDOM.render(
    <AppContainer>
        <Provider store={store}>
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <IndexRoute component={ContentContainer}/>
                    <Route path="/collapsiblepane" component={CollapsiblePane}/>
                    <Route path="/widgets" component={Widgets}/>
                    <Route path="/usermanager" component={UserManagement}/>
                    <Route path="/grids/bootstrap" component={UsersBootstrapTable}/>
                    <Route path="/grids/fixed-data-table-2" component={UsersFixedDataTable2}/>
                    <Route path="/grids/responsive-fixed-data-table-2" component={UsersResponsiveFixedDataTable2}/>
                    <Route path="/forms/dynamic" component={DynamicFormPage}/>
                    <Route path="/content/:contentId" component={ContentContainer}/>
                </Route>
            </Router>
        </Provider>
    </AppContainer>
    , document.getElementById("app"));

if (module.hot) {
    module.hot.accept("./components/App", () => {
        console.log("index.js HMR");//eslint-disable-line no-console
        const NewApp = require("./components/App").default;
        render(<AppContainer><NewApp/></AppContainer>, document.getElementById("app")); //eslint-disable-line no-undef
    });
}