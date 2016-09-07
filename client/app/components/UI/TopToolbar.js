import React from "react";
import {Row, Col, ButtonGroup, Button, Glyphicon} from "react-bootstrap";

class TopToolbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "title": "Deal List",
            "buttons": [
                {"id": "1", "name": "New Deal", "style": "success", "glyphicon": "plus"}
            ]
        };
    };

    render() {
        const buttons = this.state.buttons.map(function (item) {
            return (
                <Button key={item.id} bsStyle={item.style}> <Glyphicon glyph={item.glyphicon}/> {item.name}</Button>
            )
        });

        return (<div className="top-toolbar">
            <Row>
                <Col sm={4}>
                    <div className="pull-left">
                        <h2>{this.state.title}</h2>
                    </div>
                </Col>
                <Col sm={4}>
                </Col>
                <Col sm={4}>
                    <div className="pull-right">
                        <ButtonGroup>
                            {buttons}
                        </ButtonGroup>
                    </div>
                </Col>
            </Row>
        </div>);
    }
}

export default TopToolbar;
