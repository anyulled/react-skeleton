import {contents, contentHeaders} from "../../../app/reducers/content/content";
import {CONTENT_UPDATE, CONTENT_UNMOUNT, CONTENT_LIST_UPDATE, ERROR} from "../../../app/actions/content/content";
import mocha from "mocha";
import {expect} from "chai";

describe("content reducers", () => {
	
	const content1={
		"title":"c1",
		"description":"d1"
	};
	const content2={
		"title":"c2",
		"description":"d2"
	};
	const content=[content1,content2];
	
	describe("content headers", () => {
	    it("should return an initial state when called with no params", () => {
	        expect(contentHeaders()).to.eql([]);
	    });
	    
	    it("should ignore unknown actions", () => {	    	        
	        let newState = contentHeaders([],{
	            type: "CONTENT_UNKNOWN_ACTION"
	        });
	        expect(newState).to.eql([]);
	    });
	    
	    it("should maintain state on error", () => {	        
	        let newState = contentHeaders([...content],{
	            type: ERROR
	        });
	        expect(newState).to.eql(content);
	    });
	    
	    it("should populate lists", () => { 
	        let newState = contentHeaders([],{
	            type: CONTENT_LIST_UPDATE,
	            payload:[...content]
	        });
	        expect(newState).to.eql(content);
	    });
	    it("should populate single elements as a single elements list", () => { 
	        let newState = contentHeaders([],{
	            type: CONTENT_LIST_UPDATE,
	            payload:content1
	        });
	        expect(newState).to.eql([content1]);
	    });
	});
	describe("content entries", () => {
	    it("should return an initial state when called with no params", () => {
	        expect(contents()).to.eql({});
	    });
	    
	    it("should ignore unknown actions", () => {	    	        
	        let newState = contents([],{
	            type: "CONTENT_UNKNOWN_ACTION"
	        });
	        expect(newState).to.eql([]);
	    });
	    
	    it("should maintain state on error", () => {	        
	        let newState = contents(content1,{
	            type: ERROR
	        });
	        expect(newState).to.eql(content1);
	    });
	    
	    it("should update when provided new data ", () => { 
	    	var newData=content1;
	    	newData.description="random description";
	        let newState = contents(content1,{
	            type: CONTENT_UPDATE,
	            payload:newData
	        });
	        expect(newState).to.eql(newData);
	    });
	    it("should clear the state when unmounted", () => { 
	    	let newState = contents(content1,{
	            type: CONTENT_UNMOUNT
	        });
	        expect(newState).to.eql({});
	    });
	});
});