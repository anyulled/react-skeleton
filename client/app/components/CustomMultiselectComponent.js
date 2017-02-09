import React from "react";
import {PageHeader, Pagination, Collapse, Button} from "react-bootstrap";
import Multiselect from "./Multiselect/CustomMultiselect.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "react-bootstrap-multiselect/css/bootstrap-multiselect.css";


class CustomMultiselect extends React.Component {
    constructor(props) {
        super(props);
        this.state={selectedValues : [1,24]};
        this.handleSelect = this.handleSelect.bind(this);
    }
    
    componentWillMount() {
        if (typeof this.props.loadData === "function") {
            this.props.loadData();
        }
    }

    handleSelect(id, value, checked, parent){
        console.log("value ", value);
        console.log("id ", id);

        let values = {...this.state.selectedValues};
        console.log("length", values.length);

        if(values.length > id){
            values = values.splice(id+1, values.length);
            console.log("values", values);
        }

        if(checked){
            this.setState({selectedValues:values});
        }else{
            //remove the value from the list
        }


    }

    render() {
        let {selectors, data} = this.props;
        console.log(data);
        return (
            <div>
             <Collapse in={this.state.open}>
                 <div>
                 {Object.keys(selectors).map((selector,i)=>{
                    let tree=[...data];
                    let selected = null;

                     if(i==0 || this.state.selectedValues[i-1]){
                       for(var k=0;k<i;k++){
                         for(var e=0;e<tree.length;e++){
                            
                             tree = tree[e].id===this.state.selectedValues[k]?(tree[e].products?tree[e].products:tree):tree;
               
                          }            
                      }    
                     }else{
                    tree={};
                 }
                
                 if(this.state.selectedValues[i] != undefined){
                    selected=this.state.selectedValues[i];
                 }
                             
                 return <Multiselect key={i} id={i} multiple={selectors[selector].type} label={selectors[selector].label} selected={selected} data={tree} event={this.handleSelect}/>;
                
                })}
                </div>
            </Collapse>
            <Button onClick={()=> this.setState({ open: !this.state.open })}>
               Toggle
            </Button>
            </div>
        );
    }
}

CustomMultiselect.proptypes = {
     data: React.PropTypes.array
   };

export default CustomMultiselect;


