import { GENERATE_OTP_LOADER } from "../Constants/action.constants";

const defaultState = {
    loading: false,
}

export default function authReducer(state = defaultState, action) {
    switch (action.type) {
        case GENERATE_OTP_LOADER:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};