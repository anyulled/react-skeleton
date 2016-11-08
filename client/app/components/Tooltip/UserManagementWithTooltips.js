import React from "react";
import { connect } from "react-redux";

import {Grid, Row, Col, Button} from "react-bootstrap";
import {Overlay} from "react-overlays";

import * as userActions from "../../actions/users/users";
import * as modalActions from "../../actions/modal/modal";
import * as tooltipActions from "../../actions/tooltips/tooltips";

import * as colors from "../../utils/colors.js";
import BootstrapTableContainer from "../../containers/DataGrid/BootstrapTableContainer";
import RootModal from "../../containers/RootModal";
import PopupInButtonClick from "./PopupInButtonClick";
import PopupInButtonClick2 from "./PopupInButtonClick2";
import PopoverWithButtonClick from "./PopoverWithButtonClick";
import TooltipContainer from "../../containers/Tooltip/TooltipContainer";

const UserFormPageWithTooltips = (props) => {
  console.log("UserFormPageWithTooltips::UserFormPageWithTooltips");
  return (
    <div>
      <PopoverWithButtonClick />
      <PopupInButtonClick colorType={colors.success} />
      <PopupInButtonClick2 colorType={colors.danger} pos={'bottom'} initialShow={false} />
      <br />
      <Grid fluid>
        <Row>
          <Col xs={12} md={8}>
            <TooltipContainer showTooltip={false}
                              placement="right"
                              tooltip="Tooltip por defecto!!"
                              colorType="success"
                              loadBackTooltip={false}>
              <Button type="button" bsStyle="primary" onClick={() => props.onAddUserClick()}>Add User!!</Button>
            </TooltipContainer>
            <br />
            <br />
            <TooltipContainer showTooltip={false}
                              placement="right"
                              tooltip={props.tooltip}
                              colorType={props.colorType}
                              loadBackTooltip={true}
                              onLoadBackTooltip={() => props.onBackLoadTooltip()}>
              <Button type="button" bsStyle="primary" onClick={() => props.onAddUserClick()}>Add User!!</Button>
            </TooltipContainer>
            <br />
            <br />
          </Col>
          <Col xs={12} md={10}>
            <h4>This is for display purposes only.&nbsp;
              <TooltipContainer showTooltip={false}
                                placement="top"
                                tooltip="Tooltip por defecto!!"
                                colorType="success"
                                loadBackTooltip={false}>
                <a>Any</a>
              </TooltipContainer>
              &nbsp;changes on the user list will be undone upon re-rendering.
            </h4>
            <BootstrapTableContainer edit={true} />
          </Col>
        </Row>
      </Grid>
	  <RootModal/>
    </div>
  );
}; // UserFormPageWithTooltips

const mapStateToProps = (state, ownProps) => {
  console.log("UserFormPageWithTooltips::mapStateToProps");
  return {
    tooltip: state.addUserTooltip.tooltip,
    colorType: state.addUserTooltip.colorType
  };
}; // mapStateToProps

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("UserFormPageWithTooltips::mapDispatchToProps");
  return {
    onAddUserClick: () => {
      dispatch(modalActions.modalNewUser());
    },
    onBackLoadTooltip: () => {
      dispatch(tooltipActions.getAddUserButtonTooltip());
    }
  };
}; // mapDispatchToProps

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserFormPageWithTooltips);
