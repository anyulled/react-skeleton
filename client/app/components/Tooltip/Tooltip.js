var React = require('react');
var ReactDOM = require('react-dom');

import {Overlay, Button} from "react-overlays";

import * as colors from "../../utils/colors.js";

//Styles Mostly from Bootstrap
const TooltipStyle = {
  position: 'absolute',
  padding: '0 5px'
};

const TooltipInnerStyle = {
  padding: '3px 8px',
  color: '#fff',
  textAlign: 'center',
  borderRadius: 3,
  backgroundColor: '#000',
  opacity: .75
};

const TooltipArrowStyle = {
  position: 'absolute',
  width: 0, height: 0,
  borderRightColor: 'transparent',
  borderLeftColor: 'transparent',
  borderTopColor: 'transparent',
  borderBottomColor: 'transparent',
  borderStyle: 'solid',
  opacity: .75,
};

const PlacementStyles = {
  left: {
    tooltip: { marginLeft: -3, padding: '0 5px' },
    arrow: { right: 0, marginTop: -5, borderWidth: '5px 0 5px 5px', borderLeftColor: '#000' },
  },
  right: {
    tooltip: { marginRight: 3, padding: '0 5px' },
    arrow: { left: 0, marginTop: -5, borderWidth: '5px 5px 5px 0', borderRightColor: '#000' },
  },
  top: {
    tooltip: { marginTop: -3, padding: '5px 0' },
    arrow: { bottom: 0, marginLeft: -5, borderWidth: '5px 5px 0', borderTopColor: '#000' },
  },
  bottom: {
    tooltip: { marginBottom: 3, padding: '5px 0' },
    arrow: { top: 0, marginLeft: -5, borderWidth: '0 5px 5px', borderBottomColor: '#000' },
  }
};

const StyledTooltip = props => {
  console.log ('Tooltip::StyledTooltip');
  let placementStyle = PlacementStyles[props.placement];
  let {
    style,
    arrowOffsetLeft: left = placementStyle.arrow.left,
    arrowOffsetTop: top = placementStyle.arrow.top,
    children,
    colorType
  } = props;
  
  if (colorType !== undefined && colorType !== null){
    TooltipInnerStyle.backgroundColor = eval("colors.".concat(colorType));
  }
  
  return (
    <div style={{...TooltipStyle, ...placementStyle.tooltip, ...style}}>
      <div style={{...TooltipArrowStyle, ...placementStyle.arrow, left, top }}/>
      <div style={TooltipInnerStyle}>
        {props.children}
      </div>
    </div>
  );
};

function Tooltip (props) {
  console.log ('Tooltip::Tooltip');
  return (props.tooltip !== undefined && props.tooltip !== null)
    ? <span>
        {props.component}
        <Overlay
          show={props.showTooltip}
          onHide={() => this.setState({ showTooltip: false })}
          placement={props.placement}
          container={this}
          target={props.target}
        >
          <StyledTooltip colorType={props.colorType}>
            {props.tooltip}
          </StyledTooltip>
        </Overlay>
      </span>
    : <span>{props.component}</span>
} // Tooltip (props)

Tooltip.propTypes = {
  showTooltip: React.PropTypes.bool.isRequired,
  placement: React.PropTypes.string.isRequired,
  tooltip: React.PropTypes.string,
  colorType: React.PropTypes.string,
  component: React.PropTypes.element.isRequired,
  target: React.PropTypes.object
} // Tooltip.propTypes

module.exports = Tooltip;
