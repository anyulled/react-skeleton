import tablesReducer from "../../../app/reducers/tables/tables";
import {TABLES_USER_SET_COLUMN_ORDER,TABLES_USER_SET_ROW_ORDER} from "../../../app/actions/tables/tables";
import mocha from "mocha";
import {expect} from "chai";

describe("tables reducer", () => {
    it("should return an initial state when called with no params", () => {
        expect(tablesReducer()).to.not.be.empty;
    });
    
    const initialState=tablesReducer();
    
    it("should ignore unknown actions", () => {
    	let state = {...initialState};
        
        let newState = tablesReducer(state, {
            type: "TABLES_UNKNOWN_ACTION"
        });
        expect(newState).to.eql(state);
    });
    
    it("should allow column sorting", () => {
    	let swapPositionA=2;
    	let swapPositionB=4;
    
    	let state = {...initialState};
    	let columns=[...state.userTable.columns];
    	
    	let columnTemp=columns[swapPositionA];
    	columns[swapPositionA]=columns[swapPositionB];
    	columns[swapPositionB]=columnTemp;
    	
        let newState = tablesReducer(state, {
            type: TABLES_USER_SET_COLUMN_ORDER,
            columns: columns
        });
           
        expect(newState.userTable.columns.length).to.eql(state.userTable.columns.length);
        expect(newState.userTable.columns[swapPositionA]).to.eql(state.userTable.columns[swapPositionB]);
        expect(newState.userTable.columns[swapPositionB]).to.eql(state.userTable.columns[swapPositionA]);
    });
    
    it("should allow row sorting", () => {
    	
    	let state = {...initialState};
    	
        let newState = tablesReducer(state, {
            type: TABLES_USER_SET_ROW_ORDER,
            rowSortKey: state.userTable.columns[2].key
        });
           
        //when sorting on a new column, it is initially asc
        expect(newState.userTable.rowSortKey).to.eql(state.userTable.columns[2].key);
        expect(newState.userTable.rowSortDesc).to.eql(false);
        
        //when sorting on the same field, order is inverted
        newState = tablesReducer(newState, {
            type: TABLES_USER_SET_ROW_ORDER,
            rowSortKey: newState.userTable.columns[2].key
        });
        
        expect(newState.userTable.rowSortDesc).to.eql(true);
    });
});