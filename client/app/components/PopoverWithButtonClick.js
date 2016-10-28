import React from "react";
import ReactDOM from "react-dom";

import {Tooltip, Button, Popover} from "react-bootstrap";
import {Overlay} from "react-overlays";

import * as colors from "../utils/colors.js";

class PopoverWithButtonClick extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = e => {
      this.setState({ target: e.target, show: !this.state.show });
    };

    this.state = { show: false };
  }

  render() {
    return (
            <div style={{ height: 100, paddingLeft: 150, position: 'relative' }}>
        <Button onMouseOver={this.handleClick} onMouseOut={this.handleClick}>
          Holy guacamole!
        </Button>

        <Overlay
          show={this.state.show}
        target={ this.state.target}
          placement="bottom"
          container={this}
          containerPadding={20}
        >
          <Popover id="popover-contained" title="Popover bottom">
            <strong>Holy guacamole!</strong> Check this info.
          </Popover>
        </Overlay>
        </div>
    );
  }
}

export default PopoverWithButtonClick;