import React from "react";
import {expect} from "chai";
import { shallow } from 'enzyme';
import ReactDOM from "react-dom";
import DatePicker from "react-datepicker";
import DateFilter from "../../app/components/DataGrid/Filter/DateFilter";
import moment from "moment";
import TestUtils from 'react-addons-test-utils'

describe("Specific filters", () => {
    describe("<DateFilter/>", () => {
        const props = {
            selected:moment(),
            handleFilterValue:function(){},
            filterProps:{
            	key:"yearOfBirth",	            
	            title:"Year of Birth",
	            type:"date",
	            width:150
            }
        }    
        it("should mount", function () {
            var container  = document.createElement('div');        
            var instance = ReactDOM.render(<DateFilter {...props}/>, container);
            expect(instance).to.exist;                    
        });
        it("renders a DatePicker object", function () {       
            var wrapper = shallow(<DateFilter {...props}/>);
            expect(wrapper.text()).to.equal("<DatePicker />");  
            expect(wrapper.find('.react-datepicker-datagrid-filter')).to.exist;
            expect(wrapper.find('.react-datepicker-datagrid-filter')).to.have.length(1);  
            
        });
    });
    

});