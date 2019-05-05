import { SET_OFFERS, LOADING_OFFERS, ERROR_OFFERS } from "../Constants/action.constants";

const defaultStore = {
    offers: [],
    loading: false,
    error: null
}

export default function offersReducer(store = defaultStore, action) {
    switch (action.type) {
        case SET_OFFERS:
            return { ...store, offers: action.payload, loading: false };
        case LOADING_OFFERS:
            return { ...store, loading: true }
        case ERROR_OFFERS:
            return { ...store, loading: false, error: action.payload }
        default:
            return store;
    }
}