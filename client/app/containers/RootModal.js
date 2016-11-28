import React, {PropTypes} from "react";
import {connect} from "react-redux";
import EditUserModal from "containers/Modals/EditUserModal";
import NewUserModal from "containers/Modals/NewUserModal";

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
    modalType: PropTypes.string,
    modalProps: PropTypes.object
};

const mapStateToProps = (state) => {
    return {
        modalType: state.modal.modalType,
        modalProps: state.modal.modalProps
    };
};


export default connect(
    mapStateToProps,
    null
)(RootModal);