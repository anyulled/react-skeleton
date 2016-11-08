import React from "react";

import Tooltip from "../../components/Tooltip/Tooltip";

const TooltipContainer = React.createClass({
  getInitialState: function () {
    console.log ('TooltipContainer::getInitialState');
    return {
      showTooltip: this.props.showTooltip
    }
  },
  componentWillMount: function () {
    console.log ('TooltipContainer::componentWillMount');
  },
  componentDidMount: function () {
    console.log ('TooltipContainer::componentDidMount');
    if (this.props.loadBackTooltip){
      this.props.onLoadBackTooltip();
    } // if
  },
  componentWillReceiveProps: function () {
    console.log ('TooltipContainer::componentWillReceiveProps');
  },
  componentWillUnMount: function () {
    console.log ('TooltipContainer::componentWillUnMount');
  },
  handleToogleTooltip: function (event) {
    console.log ('TooltipContainer::handleToogleTooltip');
    let showTooltip = this.state.showTooltip;
    
    if (!showTooltip) {
      showTooltip = true;
    } else {
      showTooltip = false;
    }
    return this.setState({ target: event.target, showTooltip });
  },
  render: function () {
    console.log ('TooltipContainer::render');
    var childrenNewProps = [{onMouseOver: this.handleToogleTooltip, onMouseOut: this.handleToogleTooltip}];
    var newChildren = React.cloneElement(this.props.children, ...childrenNewProps);
    
    return (
      <Tooltip
        tooltip={this.props.tooltip}
        colorType={this.props.colorType}
        placement={this.props.placement}
        showTooltip={this.state.showTooltip}
        target={this.state.target}
        component={newChildren}
      />
    );
  }
});

TooltipContainer.propTypes = {
  showTooltip: React.PropTypes.bool.isRequired,
  placement: React.PropTypes.string.isRequired,
  tooltip: React.PropTypes.string,
  colorType: React.PropTypes.string,
  loadBackTooltip: React.PropTypes.bool.isRequired,
  onLoadBackTooltip: React.PropTypes.func,
  children: React.PropTypes.element.isRequired
} // TooltipContainer.propTypes

export default TooltipContainer;
