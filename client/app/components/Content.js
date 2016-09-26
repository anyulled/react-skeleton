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
        this.props.contentHeadersLoad();
    }

    componentWillReceiveProps(props) {
        this.loadContent(props);
    }

    componentWillUnmount() {
        this.props.unmount();
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
                            <h1>{content.title ? content.title : "Default view"}</h1>
                            <p>{content.description ? content.description : "Select a tab on the left"}</p>
                        </Jumbotron>
                    </Col>
                </Row>
            </Grid>
        </div>);
    }
}

Content.propTypes = {
    content: React.PropTypes.object.isRequired,
    contentHeadersLoad: React.PropTypes.func.isRequired,
    headerList: React.PropTypes.array.isRequired,
    unmount: React.PropTypes.func.isRequired
};

export default Content;