import { put, takeLatest } from 'redux-saga/effects';
import { GET_RESTAURANTS, LOADING_RESTAURANTS, SET_RESTAURANTS, ERROR_RESTAURANTS } from '../Constants/action.constants';

import PrivateApi from '../Api/private.api';

function* getRestaurants() {
    yield put({ type: LOADING_RESTAURANTS });
    const result = yield PrivateApi.GetRestaurants();
    if (result.success) {
        yield put({ type: SET_RESTAURANTS, payload: result.response });
    } else {
        yield put({ type: ERROR_RESTAURANTS, error: "Someting went wrong" });
    }
}

export default function* () {
    yield takeLatest(GET_RESTAURANTS, getRestaurants)
}