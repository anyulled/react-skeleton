import React from "react";
import { connect } from "react-redux";

import * as userActions from "../../actions/users/users";
import * as modalActions from "../../actions/modal/modal";

import TooltipButtonContainer from "./TooltipButtonContainer";

const mapStateToProps = (state, ownProps) => {
    return {
        text: state.usersTooltips.text,
        tooltip: state.usersTooltips.tooltip,
        type: state.usersTooltips.type,
        componentType: ownProps.componentType,
        subType: ownProps.subType,
        hasTooltip: ownProps.hasTooltip,
        placement: ownProps.placement
    };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAddUserClick: () => {
            dispatch(modalActions.modalNewUser());
        },
        onGetButtonInfo: () => {
            dispatch(userActions.getButtonInfo(ownProps.subType));
        }
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TooltipButtonContainer);
