import React from "react";
import { connect } from "react-redux";
import * as userActions from "../actions/users/users";
import * as modalActions from "../actions/modal/modal";
import {Button} from "react-bootstrap";

const AddUser = ({onAddUserClick}) => {
    return (<Button type="button" bsStyle="primary" onClick={() => onAddUserClick()}>
        New User
    </Button>);
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddUserClick: () => {
            dispatch(modalActions.modalNewUser());
        }
    };
};

AddUser.propType = {
    onAddUserClick: React.PropTypes.func.isRequired
};

export default connect(
    null,
    mapDispatchToProps
)(AddUser);