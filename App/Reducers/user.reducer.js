import { SET_USER } from "../Constants/action.constants";

const defaultStore = {
    user: null
}

export default function userReducer(store = defaultStore, action) {
    switch (action.type) {
        case SET_USER:
            return { user: action.payload };
        default:
            return store;
    }
}