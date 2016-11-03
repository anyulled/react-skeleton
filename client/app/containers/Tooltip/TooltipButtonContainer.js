import React from "react";
import { connect } from "react-redux";
import {Button} from "react-bootstrap";

import TooltipButton from "../../components/Tooltip/TooltipButton";

var TooltipButtonContainer = React.createClass({
    getInitialState: function () {
        console.log ('TooltipButtonContainer::getInitialState');
        return {
            showTooltip: false,
        }
    },
    componentWillMount: function () {
        console.log ('TooltipButtonContainer::componentWillMount');
    },
    componentDidMount: function () {
        console.log ('TooltipButtonContainer::componentDidMount');
        if (this.props.hasTooltip){
            this.props.onGetButtonInfo()
        }
    },
    componentWillReceiveProps: function () {
        console.log ('TooltipButtonContainer::componentWillReceiveProps');
    },
    componentWillUnMount: function () {
        console.log ('TooltipButtonContainer::componentWillUnMount');
    },
    handleToogleTooltip: function (e) {
        console.log ('TooltipButtonContainer::handleToogleTooltip');
        let showTooltip = this.state.showTooltip;
        if (!showTooltip) {
            showTooltip = true;
        } else {
            showTooltip = false;
        }
        return this.setState({ target: e.target, showTooltip });
    },
    render: function () {
        console.log ('TooltipButtonContainer::render');
        return (
              <TooltipButton
                hasTooltip={this.props.hasTooltip}
                tooltip={this.props.tooltip}
                type={this.props.type}
                text={this.props.text}
                onAddUserClick={this.props.onAddUserClick}
                onClickEvent={this.props.onClickEvent}
                onToggleTooltip={this.handleToogleTooltip}
                showTooltip={this.state.showTooltip}
                placement={this.props.placement}
                target={this.state.target}
              />
        );
    }
});

TooltipButtonContainer.propTypes = {
  hasTooltip: React.PropTypes.bool.isRequired,
  text: React.PropTypes.string,
  tooltip: React.PropTypes.string,
  type: React.PropTypes.string,
  componentType: React.PropTypes.string.isRequired,
  subType: React.PropTypes.string.isRequired,
  placement: React.PropTypes.string.isRequired,
  onAddUserClick: React.PropTypes.func.isRequired,
  onGetButtonInfo: React.PropTypes.func.isRequired
}

module.exports = TooltipButtonContainer;
