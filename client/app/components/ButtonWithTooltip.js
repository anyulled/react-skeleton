var React = require('react');
var ReactDOM = require('react-dom');

import {Tooltip, Button} from "react-bootstrap";
import {Overlay} from "react-overlays";

import * as colors from "../utils/colors.js";

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
//    bgColor: { color: '#fff', backgroundColor: '#000' }
  },
  right: {
    tooltip: { marginRight: 3, padding: '0 5px' },
    arrow: { left: 0, marginTop: -5, borderWidth: '5px 5px 5px 0', borderRightColor: '#000' },
//    bgColor: { color: '#fff', backgroundColor: '#000' }
  },
  top: {
    tooltip: { marginTop: -3, padding: '5px 0' },
    arrow: { bottom: 0, marginLeft: -5, borderWidth: '5px 5px 0', borderTopColor: '#000' },
//    bgColor: { color: '#fff', backgroundColor: '#000' }
  },
  bottom: {
    tooltip: { marginBottom: 3, padding: '5px 0' },
    arrow: { top: 0, marginLeft: -5, borderWidth: '0 5px 5px', borderBottomColor: '#000' },
//    bgColor: { color: '#fff', backgroundColor: '#000' }
  }
};

const ToolTip = props => {
  
//  console.log (props);
//  console.log(PlacementStyles);
    console.log ('ButtonWithTooltip::ToolTip: ');
    console.log (props);
  
  let placementStyle = PlacementStyles[props.placement];

  let {
    style,
    arrowOffsetLeft: left = placementStyle.arrow.left,
    arrowOffsetTop: top = placementStyle.arrow.top,
    children,
    colorType
  } = props;
  
  console.log (props);
//  PlacementStyles[props.placement].bgColor = {backgroundColor: colorType};
  if (colorType !== undefined && colorType !== null){
      TooltipInnerStyle.backgroundColor = eval("colors.".concat(colorType));
  }
//  console.log(PlacementStyles);
  
  return (
    <div style={{...TooltipStyle, ...placementStyle.tooltip, ...style}}>
      <div style={{...TooltipArrowStyle, ...placementStyle.arrow, left, top }}/>
      <div style={TooltipInnerStyle}>
        {props.children}
      </div>
    </div>
  );
};

function ButtonWithTooltip (props) {
    console.log ('ButtonWithTooltip::ButtonWithTooltip');
    console.log (props);
  return props.hasTooltip === true
    ? <div>
        <Button type="button" bsStyle="primary" onClick={() => props.onAddUserClick()} onMouseOver={props.onToggleTooltip} onMouseOut={props.onToggleTooltip}>
            {props.text}
        </Button>
        <Overlay
          show={props.show}
          onHide={() => this.setState({ show: false })}
          placement='right'
          container={this}
          target={props.target}
        >
          <ToolTip colorType={props.type}>
              {props.tooltip}
          </ToolTip>
        </Overlay>
      </div>
    : <Button type="button" bsStyle="primary" onClick={() => props.onAddUserClick()}>New User without tooltip</Button>
}

ButtonWithTooltip.propTypes = {
  hasTooltip: React.PropTypes.bool.isRequired,
  onAddUserClick: React.PropTypes.func.isRequired,
  onToggleTooltip: React.PropTypes.func.isRequired,
}

module.exports = ButtonWithTooltip;
