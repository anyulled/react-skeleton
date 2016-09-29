import React, {Component} from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import {Provider} from "react-redux";
import Users from "../../app/components/UserManagement";
import thunk from "redux-thunk";
import nock from "nock";
import modal from "../../app/reducers/modal/modal";
import tables from "../../app/reducers/tables/tables";
import users from "../../app/reducers/users/users";
import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import {reducer as formReducer} from "redux-form";

describe("<Users/>", () => {
    let store;
    let container = document.createElement('div');

    beforeEach(function () {
        store = createStore(combineReducers({
            users,
            modal,
            tables,
            form: formReducer
        }), compose(applyMiddleware(
            thunk
            //,logger()
        )));

        nock.cleanAll();
        nock("http://localhost:3000")
            .persist()
            .get("/users")
            .reply(200, entries);
    });
    afterEach(function () {
        ReactDOM.unmountComponentAtNode(container);
        container.innerHTML = "";
    });

    it("should mount", function () {
        let connectedApp = ReactDOM.render(<Provider store={store}><Users/></Provider>, container);
        expect(connectedApp).to.exist;
    });

});


const entries = [{
    "id": "000000061",
    "name": "John Doe",
    "yearOfBirth": "1996",
    "country": "UK",
    "username": "jdoe"
},
    {
        "id": "000000062",
        "name": "Erika Mustermann",
        "yearOfBirth": "1965",
        "country": "GERMANY",
        "username": "erikamustermann"
    },
    {
        "id": "000000063",
        "yearOfBirth": "1975",
        "name": "Yamada Taro",
        "country": "JAPAN",
        "username": "yamadat"
    }];