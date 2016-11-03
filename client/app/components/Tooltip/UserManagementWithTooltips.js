import React from "react";
import BootstrapTableContainer from "../../containers/DataGrid/BootstrapTableContainer";
import RootModal from "../../containers/RootModal";
import {Grid, Row, Col, Tooltip} from "react-bootstrap";
import {Overlay} from "react-overlays";

import * as colors from "../../utils/colors.js";
import PopupInButtonClick from "./PopupInButtonClick";
import PopupInButtonClick2 from "./PopupInButtonClick2";
import PopoverWithButtonClick from "./PopoverWithButtonClick";
import TooltipContainer from "../../containers/Tooltip/TooltipContainer";

const UserFormPageWithTooltips = () => {
    return (
      <div>
        <Tooltip placement="right" className="in" id="tooltip-right">
          Tooltip right
        </Tooltip>
        <PopoverWithButtonClick />
        <PopupInButtonClick colorType={colors.success} />
        <PopupInButtonClick2 colorType={colors.warning} pos={'bottom'} initialShow={false}/>
        <PopupInButtonClick2 colorType={colors.danger} pos={'right'} initialShow={true} />
	    <Grid fluid>
	        <Row>
	            <Col xs={12} md={8}>
	                <TooltipContainer componentType="button" subType="addUser" hasTooltip={true} placement="right" />
	            </Col>
	            <Col xs={12} md={10}>
	                <h4>This is for display purposes only. Any changes on the user list will be undone upon
	                    re-rendering.</h4>
	                <BootstrapTableContainer edit={true} />
	            </Col>
	        </Row>
	    </Grid>
	    <RootModal/>
	</div>
    );
};

export default UserFormPageWithTooltips;