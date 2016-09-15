import * as actions from "../../actions/ui/ui.js";

const initialState = {
    modal: {
        modalType: "",
        modalProps: {}
    }
};

const modal = (state, action) => {
    switch (action.type) {
        case actions.MODAL_SHOW_NEW_USER:
            return {
                ...state,
                modalType: action.modalType,
                modalProps: {}
            };
        case actions.MODAL_SHOW_EDIT_USER:
            return {
                ...state,
                modalType: action.modalType,
                modalProps: action.modalProps
            };
        case actions.MODAL_HIDE:
            return {
                ...state,
                modalType: "", //an empty modalType will mean the modal won"t show because it evaluates as false
                modalProps: {}
            };
    }
    return state;
};

const ui = (state = initialState, action) => {
    if (!action) {
        return state;
    }

    switch (action.type) {
        case actions.MODAL_SHOW_NEW_USER:
        case actions.MODAL_SHOW_EDIT_USER:
        case actions.MODAL_HIDE:
            return {
                ...state,
                modal: modal(state.modal, action)
            };
    }
    return state;
};

export default ui;