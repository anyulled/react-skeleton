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

//class ActionFormatter extends React.Component {
//    render() {
//        let {dispatch,row} = this.props;
//        return (
//            <button className='btn btn-primary editRowBtn' onClick={() => {dispatch(row);}}>Edit</button>
//        );
//    }
//}
//
//function actionFormatter(cell, row, formatExtraData) {
//    return <ActionFormatter row={row} dispatch={formatExtraData}/>;
//}
//function tooltip() {
//    return <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>;
//}

const tooltip = (
        <Tooltip id="tooltip"><strong>Holy guacamole!</strong> Check this info.</Tooltip>
);

const UserFormPageWithTooltips = () => {
    return (
    <div>
        <Tooltip placement="right" className="in" id="tooltip-right">
            Tooltip right
        </Tooltip>
        <br />
        <br />
        <PopoverWithButtonClick />
        <br />
        <br />
        <PopupInButtonClick colorType={colors.success} />
        <br />
        <br />
        <PopupInButtonClick2 colorType={colors.warning} pos={'top'} initialShow={false}/>
        <br />
        <br />
        <PopupInButtonClick2 colorType={colors.danger} pos={'right'} initialShow={true} />
        <br />
        <br />
	    <Grid fluid>
	        <Row>
	            <Col xs={12} md={8}>
	                <AddUser/>
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