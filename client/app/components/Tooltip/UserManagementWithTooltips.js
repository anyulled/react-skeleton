import React from "react";
import { connect } from "react-redux";

import {Grid, Row, Col, Button} from "react-bootstrap";
import {Overlay} from "react-overlays";

import * as userActions from "../../actions/users/users";
import * as modalActions from "../../actions/modal/modal";

import * as colors from "../../utils/colors.js";
import BootstrapTableContainer from "../../containers/DataGrid/BootstrapTableContainer";
import RootModal from "../../containers/RootModal";
import PopupInButtonClick from "./PopupInButtonClick";
import PopupInButtonClick2 from "./PopupInButtonClick2";
import PopoverWithButtonClick from "./PopoverWithButtonClick";
import TooltipContainer from "../../containers/Tooltip/TooltipContainer";

const UserFormPageWithTooltips = (props) => {
  return (
    <div>
      <PopoverWithButtonClick />
      <PopupInButtonClick colorType={colors.success} />
      <PopupInButtonClick2 colorType={colors.warning} pos={'bottom'} initialShow={false}/>
      <PopupInButtonClick2 colorType={colors.danger} pos={'right'} initialShow={true} />
	  <Grid fluid>
	    <Row>
	      <Col>
	        <TooltipContainer showTooltip={false} placement="right" tooltip="Tooltip por defecto!!" loadBackTooltip={true} onLoadBackTooltip={() => props.onBackLoadTooltip()}>
              <Button type="button" bsStyle="primary" onClick={() => props.onAddUserClick()}>Add User!!</Button>
            </TooltipContainer>
	      </Col>
	      
	      <Col xs={12} md={10}>
	        <h4>This is for display purposes only. Any changes on the user list will be undone upon re-rendering.</h4>
	        <BootstrapTableContainer edit={true} />
	      </Col>
	    </Row>
	  </Grid>
	  <RootModal/>
    </div>
  );
}; // UserFormPageWithTooltips

const mapDispatchToProps = (dispatch, ownProps) => {
  console.log("UserFormPageWithTooltips::mapDispatchToProps");
  return {
    onAddUserClick: () => {
      dispatch(modalActions.modalNewUser());
    },
    onBackLoadTooltip: () => {
      dispatch(userActions.getButtonInfo('addUserButton'));
    }
  };
}; // mapDispatchToProps

export default connect(
  null,
  mapDispatchToProps
)(UserFormPageWithTooltips);
