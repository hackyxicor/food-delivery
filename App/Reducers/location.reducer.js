import { SET_LAT_LNG, LOADING_ADDRESS, SET_ADDRESS } from "../Constants/action.constants";

const defaultStore = {
    latitude: 0,
    longitude: 0,
    address: {},
    loading: false
}

export default function locationReducer(store = defaultStore, action) {
    switch (action.type) {
        case SET_LAT_LNG:
            return { ...store, ...action.payload };
        case LOADING_ADDRESS:
            return { ...store, loading: true };
        case SET_ADDRESS:
            return { ...store, address: action.payload, loading: false }
        default:
            return store;
    }
}