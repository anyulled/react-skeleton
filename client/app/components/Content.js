import React from "react";
import Sidebar from "./UI/Sidebar";
import {Grid, Row, Col, Jumbotron, Button} from "react-bootstrap";
import {Link} from "react-router";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null            
        };
    }

    componentWillMount(){   
    	if (typeof this.props.contentHeadersLoad === "function") {
       		this.props.contentHeadersLoad();
    	}
    }
    
    componentWillReceiveProps (props){
    	this.loadContent(props);    	
    }
    
    componentWillUnmount(){
    	this.props.unmount();
    } 
    
    loadContent(props){ 
    	if (typeof props.contentLoad === "function") {
    		let shouldLoadContent=false;
    		
        	if(props.routeParams && props.routeParams.contentId){
        		if(props.routeParams.contentId!=this.state.selectedItem){
        			this.state.selectedItem=props.routeParams.contentId;
        			shouldLoadContent=true;
        		}        		
        	}
        	if(shouldLoadContent){
        		props.contentLoad(this.state.selectedItem);
        	}
        }
    }   
   
    render() {
    	
    	let {data} = this.props;
    	let {headerList,content}=this.props;
    	return (<div>
            <Grid>
                <Row>
                    <Col sm={2}>
                    	{headerList?<Sidebar items={headerList}/>:''}                 
                    </Col>
                    <Col sm={8}>
                        <Jumbotron>
                        	<h1>{content && content.title?content.title:'Default view'}</h1>
                            <p>{content && content.description?content.description:'Select a tab on the left'}</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }                    	
}

export default Content;