import { GET_OFFERS, GET_RESTAURANTS, GET_USER, SET_USER, GET_RESTAURANT_DETAIL, UPDATE_CART, SET_LAT_LNG, GET_ADDRESS } from "../Constants/action.constants";

export const GetOffersAction = () => ({
    type: GET_OFFERS
})

export const GetRestaurantsAction = () => ({
    type: GET_RESTAURANTS
})

export const GetUserAction = () => ({
    type: GET_USER
})

export const SetUserAction = (user) => ({
    type: SET_USER,
    payload: user
})

export const GetRestaurantDetailAction = () => ({
    type: GET_RESTAURANT_DETAIL
})

export const UpdateCartAction = (payload) => ({
    type: UPDATE_CART,
    payload
})

export const SetLatLngAction = (latitude, longitude) => ({
    type: SET_LAT_LNG,
    payload: {
        latitude,
        longitude
    }
})

export const GetAddressAction = () => ({
    type: GET_ADDRESS
})