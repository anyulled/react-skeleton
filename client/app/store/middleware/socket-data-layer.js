import * as actions from "actions/users/users";
import io from "socket.io-client";

var socket = null;

export function socketMiddleware(store) {
    return next => action => {
        if (socket) {
            switch (action.type) {
                case actions.USER_LOAD:
                    socket.emit(action.type, null);
                    break;
                case actions.USER_ADD:
                    if (!Array.isArray(action.payload)) {
                        socket.emit(action.type, action.payload);
                    }
                    break;
            }
        }
        return next(action);
    };
}

export default function (store) {
    socket = io.connect("ws://localhost:3001");

    socket.on(actions.USER_LOAD, data => {
        store.dispatch(actions.usersLoadFromData(data));
    });
}