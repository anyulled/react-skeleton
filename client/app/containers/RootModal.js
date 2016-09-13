import React from 'react';
import { Modal } from "react-bootstrap";
import EditUserModal from "./modals/EditUserModal";
import NewUserModal from "./modals/NewUserModal";
import { connect } from "react-redux";

const MODAL_COMPONENTS = {
  'NEW_USER': NewUserModal,
  'EDIT_USER': EditUserModal
  /* other modals */
}

const RootModal = ({ modalType, modalProps }) => {
			if (!modalType) {
				return null;
			}

			const SpecificModal = MODAL_COMPONENTS[modalType]

			return (<SpecificModal show={Boolean(modalType)} {...modalProps} />);
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