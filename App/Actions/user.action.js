import { GET_USER, SET_USER } from "../Constants/action.constants";

export const GetUserAction = () => ({
    type: GET_USER
})

export const SetUserAction = (user) => ({
    type: SET_USER,
    payload: user
})
