// eslint-disable-next-line
/* global define, it, describe */

import {actionOne, actionTwo, actionThree} from "../src/actions/genericAction";
import {expect} from "chai";

describe("generic action", ()=> {
    it("should provide generic action", ()=> {
        expect(actionOne).to.be.a("function");
    })
});

describe("generic action", ()=> {
    it("should provide generic action", ()=> {
        expect(actionTwo).to.be.a("function");
    })
});

describe("generic action", ()=> {
    it("should provide generic action", ()=> {
        expect(actionThree).to.be.a("function");
    })
});