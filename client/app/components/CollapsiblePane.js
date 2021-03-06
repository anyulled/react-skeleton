import React from "react";
import 'rc-collapse/assets/index.css';
import 'string.prototype.repeat';
import Collapse, { Panel } from 'rc-collapse';

const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
`;

function random() {
    return parseInt(Math.random() * 10, 10) + 1;
}

class CollapsiblePane extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            time: random(),
            accordion: false,
            activeKey: ['4']
        };
        this.onChange = this.onChange.bind(this);
        this.reRender = this.reRender.bind(this);
        this.toggle = this.toggle.bind(this);
        this.setActivityKey = this.setActivityKey.bind(this);
    }

    onChange(activeKey) {
        this.setState({
            activeKey,
        });
    }

    getItems() {
        const items = [];
        for (let i = 0, len = 3; i < len; i++) {
            const key = i + 1;
            items.push(
                <Panel header={`This is panel header ${key}`} key={key}>
                    <p>{text.repeat(this.state.time)}</p>
                </Panel>
            );
        }
        items.push(
            <Panel header={`This is panel header 4`} key="4">
                <Collapse defaultActiveKey="1">
                    <Panel header={`This is panel nest panel`} key="1">
                        <p>{text}</p>
                    </Panel>
                </Collapse>
            </Panel>
        );

        return items;
    }

    setActivityKey() {
        this.setState({
            activeKey: ['2'],
        });
    }

    reRender() {
        this.setState({
            time: random(),
        });
    }

    toggle() {
        this.setState({
            accordion: !this.state.accordion,
        });
    }

    render() {
        const accordion = this.state.accordion;
        const btn = accordion ? 'accordion' : 'collapse';
        const activeKey = this.state.activeKey;
        return (<div style={{ margin: 20, width: 400 }}>
                <button onClick={this.reRender}>reRender</button>
                <button onClick={this.toggle}>{btn}</button>
                <br/><br/>
                <button onClick={this.setActivityKey}>active header 2</button>
                <br/><br/>
                <Collapse
                    accordion={accordion}
                    onChange={this.onChange}
                    activeKey={activeKey}
                >
                    {this.getItems()}
                </Collapse>
            </div>);
    }

}

export default CollapsiblePane;