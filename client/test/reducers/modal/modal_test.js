import modalReducer from "../../../app/reducers/modal/modal";
import {MODAL_SHOW_EDIT_USER, MODAL_SHOW_NEW_USER, MODAL_HIDE} from "../../../app/actions/modal/modal";
import mocha from "mocha";
import {expect} from "chai";

describe("modal reducer", () => {
    it("should return an initial state when called with no params", () => {
        expect(modalReducer()).to.not.be.empty;
    });
    
    const initialState=modalReducer();
    const modalTypeNewUser="NEW_USER";
    const modalTypeEditUser="EDIT_USER";
    const user = {
            "id": "123456789",
            "name": "Lukas Müller",
            "yearOfBirth": "1900",
            "country": "GERMANY",
            "username": "lmuller"
        };
    
    it("should ignore unknown actions", () => {
    	let state = {...initialState};
        
        let newState = modalReducer(state,{
            type: "MODAL_UNKNOWN_ACTION"
        });
        expect(newState).to.eql(state);
    });
    
    it("should have no props when loaded for a new user", () => {
    	let state = {...initialState};
        
        let newState = modalReducer(state,{
            type: MODAL_SHOW_NEW_USER,
            modalType: modalTypeNewUser
        });
        expect(newState.modalType).to.eql(modalTypeNewUser);
        expect(newState.modalProps).to.be.empty;
    });
    
    it("should propagate props when loaded for an existing user", () => {
    	let state = {...initialState};
        
        let newState = modalReducer(state,{
            type: MODAL_SHOW_EDIT_USER,
            modalType: modalTypeEditUser,
            modalProps: user
        });
        expect(newState.modalType).to.eql(modalTypeEditUser);
        expect(newState.modalProps).to.eql(user);
    });
    it("should reset state when hiding", () => {
    	let state = {...initialState};
        
        let newState = modalReducer(state,{
            type: MODAL_HIDE
        });
        expect(newState).to.eql(initialState);
    });
});