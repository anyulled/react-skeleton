import React from 'react';
import { connect } from 'react-redux';
import * as userActions from "../actions/users/users";
import * as uiActions from "../actions/ui/ui";
import { Button } from "react-bootstrap";

const AddUser = ({ onAddUserClick }) => { return (<Button type='button' bsStyle="info" onClick={() => onAddUserClick()}>
					New User
		</Button>);
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddUserClick: () => {
			dispatch(uiActions.modalNewUser());
		}
	};
};

const mapStateToProps = (state) => {
	return {
		modalType: state.ui.modal.modalType,
		modalProps: state.ui.modal.modalProps
	};
};
		 

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddUser);