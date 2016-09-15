export const MODAL_SHOW_NEW_USER = "modal/show/new_user";
export const MODAL_SHOW_EDIT_USER = "modal/show/edit_user";
export const MODAL_HIDE = "modal/hide";

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
        type: MODAL_HIDE
    };
}