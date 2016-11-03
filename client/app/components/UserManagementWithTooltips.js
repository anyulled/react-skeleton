import React from "react";
import AddUser from "../containers/AddUser";
import BootstrapTableContainer from "../containers/DataGrid/BootstrapTableContainer";
import RootModal from "../containers/RootModal";
import {Grid, Row, Col, Tooltip, Button, Popover} from "react-bootstrap";
import {Overlay} from "react-overlays";

import * as colors from "../utils/colors.js";
import PopupInButtonClick from "./PopupInButtonClick";
import PopupInButtonClick2 from "./PopupInButtonClick2";
import PopoverWithButtonClick from "./PopoverWithButtonClick";
import AddUserButtonContainer from "../containers/AddUserButtonContainer";

const UserFormPageWithTooltips = () => {
    return (
            <div>

        <PopoverWithButtonClick />

    
	    <Grid fluid>
	        <Row>
	            <Col xs={12} md={8}>
	                <AddUserButtonContainer/>
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