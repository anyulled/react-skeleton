import React from "react";
import {Glyphicon,Grid,Row,Col,Label,DropdownButton,MenuItem} from "react-bootstrap";
import FilterContainer from "../../../containers/DataGrid/Filter/FilterContainer";


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
		    <div style={{width:100+"%","backgroundImage":"linear-gradient(#fff,#efefef)","border": "1px solid #d3d3d3","borderBottom": "0px","padding":"2px"}}>
			    <Grid fluid>
				    <Row>
			    		<Col xs={3} md={2}>
			    			Filters
			    			<br/>
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
			    		<Col xs={9} md={10}>
				    		<Grid fluid>
						    	<Row>
					    			{filters?filters.filter(e=>e.active==true).map(function (filter, i) {
					    				return (		    					
					    					<FilterContainer key={i} filterType={filter.type} filterProps={filter} tableName={tableName}/>
						    			);
					    			}):null}
				    			</Row>
						    </Grid>	 
			    		</Col>
			    	</Row>
			    </Grid>	    	
		    </div>
		);
    }
}

export default FilterBar;