import React from 'react';
import { connect } from 'react-redux';
import * as userActions from "../actions/users/users";
import * as modalActions from "../actions/modal/modal";
import { Button } from "react-bootstrap";

const AddUser = ({ onAddUserClick }) => { return (<Button type='button' bsStyle="info" onClick={() => onAddUserClick()}>
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

const mapStateToProps = (state) => {
	return {
		modalType: state.modal.modalType,
		modalProps: state.modal.modalProps
	};
};
		 

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddUser);