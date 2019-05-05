import { put, takeLatest } from 'redux-saga/effects';
import { GET_RESTAURANT_DETAIL, LOADING_RESTAURANT_DETAIL, SET_RESTAURANT_DETAIL, ERROR_RESTAURANT_DETAIL } from '../Constants/action.constants';

import PrivateApi from '../Api/private.api';

function* getRestaurant() {
    yield put({ type: LOADING_RESTAURANT_DETAIL });
    const result = yield PrivateApi.GetRestaurantDetail();
    if (result.success) {
        yield put({ type: SET_RESTAURANT_DETAIL, payload: result.response });
    } else {
        yield put({ type: ERROR_RESTAURANT_DETAIL, error: "Someting went wrong" });
    }
}

export default function* () {
    yield takeLatest(GET_RESTAURANT_DETAIL, getRestaurant)
}