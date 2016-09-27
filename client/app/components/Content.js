import React from "react";
import Sidebar from "./UI/Sidebar";
import {Grid, Row, Col, Jumbotron} from "react-bootstrap";

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: null
        };
    }

    componentWillMount() {
    	if (this.props && typeof this.props.contentHeadersLoad === "function") {
    		this.props.contentHeadersLoad();
    	}
    }

    componentWillReceiveProps(props) {
    	this.loadContent(props);    	
    }

    componentWillUnmount() {
    	if (typeof this.props.unmount === "function") {
    		this.props.unmount();
    	}        
    }

    loadContent(props) {
        if (typeof props.contentLoad === "function") {
        	let shouldLoadContent = false;
        	if (props.routeParams && props.routeParams.contentId) {
                if (props.routeParams.contentId != this.state.selectedItem) {
                    this.setState({
                        selectedItem: props.routeParams.contentId
                    });
                    shouldLoadContent = true;
                }
            }
            if (shouldLoadContent) {
                props.contentLoad(props.routeParams.contentId);
            }
        }
    }

    render() {
        //let {data} = this.props;
        let {headerList, content}=this.props;
        return (<div>
            <Grid>
                <Row>
                    <Col sm={2}>
                        {headerList ? <Sidebar items={headerList}/> : ""}
                    </Col>
                    <Col sm={8}>
                        <Jumbotron>
                            <h1>{content && content.title ? content.title : "Default view"}</h1>
                            <p>{content && content.description ? content.description : "Select a tab on the left"}</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }
}

Content.propTypes = {
    content: React.PropTypes.object,
    contentHeadersLoad: React.PropTypes.func,
    headerList: React.PropTypes.array,
    unmount: React.PropTypes.func
};

export default Content;