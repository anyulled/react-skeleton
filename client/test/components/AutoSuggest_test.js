import React from "react";
import ReactDOM from "react-dom";
import {expect} from "chai";
import TestUtils from 'react-addons-test-utils';
import Autosuggest from 'react-autosuggest';
import Autocomplete from 'react-autocomplete';

//Xavi Mundó Fucks!!
//Jaja saludos
describe("Autosuggest", () => {
	let container = document.createElement('div');
	let suggestions = [];

	const getSuggestionValue = () => {return '';};

	const renderSuggestion = () => (
	  <div></div>
	);

    let onChange = (event, { newValue }) => {};

	let onSuggestionsFetchRequested = ({ value }) => {
	  suggestions = [];
	};

	let onSuggestionsClearRequested = () => {
	  suggestions = [];
	};

	afterEach(function(){
		ReactDOM.unmountComponentAtNode(container);
		container.innerHTML="";
	});

    const inputProps = {
      value: '',
      onChange: onChange
    };
    
	describe("<Autosuggest/>", () => {
		it("should mount", function () {			
			let connectedApp = ReactDOM.render(<Autosuggest
											        suggestions={suggestions}
											        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
											        onSuggestionsClearRequested={onSuggestionsClearRequested}
											        getSuggestionValue={getSuggestionValue}
											        renderSuggestion={renderSuggestion}
											        inputProps={inputProps}
											      	/>, container);
			expect(connectedApp).to.exist;
	    }); 
	});
});


describe("Autocomplete", () => {
	let container = document.createElement('div');
	
	afterEach(function(){
		ReactDOM.unmountComponentAtNode(container);
		container.innerHTML="";
	});

    
	describe("<Autocomplete/>", () => {
		it("should mount", function () {			
			let connectedApp = ReactDOM.render(<Autocomplete 
				getItemValue={(item) => item.name}
				renderItem={(item, isHighlighted) => (
           			<div
		              key={item.abbr}
		              id={item.abbr}
            		  >{item.name}</div>
          )}/>, container);
			expect(connectedApp).to.exist;
	    }); 
	});
});