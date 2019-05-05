import { SET_RESTAURANT_DETAIL, LOADING_RESTAURANT_DETAIL, ERROR_RESTAURANT_DETAIL } from "../Constants/action.constants";

const defaultStore = {
    restaurant: {},
    loading: false,
    error: null
}

export default function restaurantDetailReducer(store = defaultStore, action) {
    switch (action.type) {
        case SET_RESTAURANT_DETAIL:
            return { ...store, restaurant: action.payload, loading: false };
        case LOADING_RESTAURANT_DETAIL:
            return { ...store, loading: true }
        case ERROR_RESTAURANT_DETAIL:
            return { ...store, loading: false, error: action.payload }
        default:
            return store;
    }
}