import React from "react";
import {Glyphicon, Grid, Row, Col, DropdownButton, MenuItem} from "react-bootstrap";
import FilterContainer from "containers/DataGrid/Filter/FilterContainer";


class FilterBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleSelectEvent = this.handleSelectEvent.bind(this);
    }  
	
    handleSelectEvent(filter){
        if(filter){
            this.props.onAddFilter(this.props.tableName,filter);
        }	
    }
    
    componentWillMount() {    	
        if (typeof this.props.dataLoad === "function") {
            this.props.dataLoad(this.props.tableName);
        }
    }
	
    render() {
        let {filters,tableName} = this.props;
        let self=this;
        return (
		    <div style={{width:100+"%","backgroundImage":"linear-gradient(#fff,#efefef)","border": "1px solid #d3d3d3","borderBottom": "0px","padding":"7px 2px 3px"}}>
			    <Grid fluid>
				    <Row>
                        <Col xs={3} sm={2} style={{"paddingLeft": "3px"}}>
				    		<DropdownButton title="Add a filter" id="bg-nested-dropdown">
		    					{filters?filters.map(function (filter, i) {
		    						return (
		    							<MenuItem key={i} eventKey={filter} onSelect={self.handleSelectEvent}>
		    								{filter.name}
		    								{filter.active?<Glyphicon style={{"float":"right"}}glyph="ok"/>:null}		    								
		    							</MenuItem>
		    						);
		    					}):null
			    				}
						    </DropdownButton>
			    		</Col >
                        <Col xs={9} sm={10} style={{"borderLeft": "1px solid rgb(211, 211, 211)", "minHeight": "30px"}}>
				    		<ul className="list-inline" style={{"marginBottom":"0px"}}>						    	
				    			{filters?filters.filter(e=>e.active==true).map(function (filter, i) {
                                    return (
                                        <li key={i}>
				    						<FilterContainer filterType={filter.type} filterProps={filter} tableName={tableName}/>
				    					</li>
					    			);
				    			}):null}				    			
						    </ul>	 
			    		</Col>
			    	</Row>
			    </Grid>	    	
		    </div>
		);
    }
}

export default FilterBar;