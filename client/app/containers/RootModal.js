import React from "react";
import EditUserModal from "./Modals/EditUserModal";
import NewUserModal from "./Modals/NewUserModal";
import {connect} from "react-redux";

const MODAL_COMPONENTS = {
    "NEW_USER": NewUserModal,
    "EDIT_USER": EditUserModal
};

const RootModal = ({modalType, modalProps}) => {
    if (!modalType) {
        return null;
    }

    const SpecificModal = MODAL_COMPONENTS[modalType];

    return (<SpecificModal show={Boolean(modalType)} {...modalProps} />);
};

RootModal.prototype = {
    modalType: React.PropTypes.string,
    modalProps: React.PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        modalType: state.ui.modal.modalType,
        modalProps: state.ui.modal.modalProps
    };
};


export default connect(
    mapStateToProps,
    null
)(RootModal);