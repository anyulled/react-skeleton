export const MODAL_SHOW_NEW_USER = "ui/modal/new_user";
export const MODAL_SHOW_EDIT_USER = "ui/modal/edit_user";
export const MODAL_HIDE = "ui/modal/hide";

export function modalNewUser() {
	return {
		type: MODAL_SHOW_NEW_USER,
		modalType: "NEW_USER"
	};
}

export function modalEditUser(user) {
	return {
		type: MODAL_SHOW_EDIT_USER,
		modalType: "EDIT_USER",
		modalProps: {
			user: user
		}
	};
}

export function modalHide() {
	return {
		type: MODAL_HIDE,
	}
}