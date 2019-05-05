import { SET_RESTAURANTS, LOADING_RESTAURANTS, ERROR_RESTAURANTS } from "../Constants/action.constants";

const defaultStore = {
    restaurants: [],
    loading: false,
    error: null
}

export default function restaurantsReducer(store = defaultStore, action) {
    switch (action.type) {
        case SET_RESTAURANTS:
            return { ...store, restaurants: action.payload, loading: false };
        case LOADING_RESTAURANTS:
            return { ...store, loading: true }
        case ERROR_RESTAURANTS:
            return { ...store, loading: false, error: action.payload }
        default:
            return store;
    }
}