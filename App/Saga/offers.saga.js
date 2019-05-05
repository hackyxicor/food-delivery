import { put, takeLatest } from 'redux-saga/effects';
import { GET_OFFERS, ERROR_OFFERS, SET_OFFERS, LOADING_OFFERS } from '../Constants/action.constants';

import PrivateApi from '../Api/private.api';

function* getOffers() {
    console.log('start');
    yield put({ type: LOADING_OFFERS });
    const result = yield PrivateApi.GetOffers();
    if (result.success) {
        yield put({ type: SET_OFFERS, payload: result.response });
    } else {
        yield put({ type: ERROR_OFFERS, error: "Someting went wrong" });
    }
}

export default function* () {
    console.log('starddddt');
    yield takeLatest(GET_OFFERS, getOffers)
}