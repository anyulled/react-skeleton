import React from "react";
import { connect } from "react-redux";

import Tooltip from "../../components/Tooltip/Tooltip";

const TooltipContainer = React.createClass({
  getInitialState: function () {
    console.log ('TooltipContainer::getInitialState');
    console.log(this.props);
    return {
      showTooltip: this.props.showTooltip
    }
  },
  componentWillMount: function () {
    console.log ('TooltipContainer::componentWillMount');
  },
  componentDidMount: function () {
    console.log ('TooltipContainer::componentDidMount');
    console.log(this.props);
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
    console.log(this.props);
    return (
      <Tooltip
        tooltip={this.props.tooltip}
        type={this.props.type}
        placement={this.props.placement}
        onToggleTooltip={this.handleToogleTooltip}
        showTooltip={this.state.showTooltip}
        target={this.state.target}
        component={this.props.children}
      />
    );
  }
});

TooltipContainer.propTypes = {
  tooltip: React.PropTypes.string,
  type: React.PropTypes.string,
  showTooltip: React.PropTypes.bool.isRequired,
  placement: React.PropTypes.string.isRequired,
  loadBackTooltip: React.PropTypes.bool.isRequired,
  onLoadBackTooltip: React.PropTypes.func,
  children: React.PropTypes.element.isRequired
} // TooltipContainer.propTypes

const mapStateToProps = (state, ownProps) => {
  console.log("TooltipContainer::mapStateToProps");
  console.log(state);
  console.log(ownProps);
  if (ownProps.loadBackTooltip){
    return {
      tooltip: state.usersTooltips.tooltip,
      type: state.usersTooltips.type
    };
  } else {
    return {};
  }
}; // mapStateToProps

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("TooltipContainer::mapDispatchToProps");
  return { };
}; // mapDispatchToProps

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TooltipContainer);
