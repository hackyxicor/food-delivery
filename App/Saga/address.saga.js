import { put, takeLatest } from 'redux-saga/effects';
import { select } from 'redux-saga/effects';
import { LOADING_ADDRESS, SET_ADDRESS, GET_ADDRESS } from '../Constants/action.constants';

import GeocodingApi from '../Api/geocoding.api';

const getLocation = (state) => state.location;

function* getAddress() {
    yield put({ type: LOADING_ADDRESS });
    const { latitude, longitude } = yield select(getLocation);
    const result = yield GeocodingApi.GetAddress(latitude, longitude);
    if (result.results.length) {
        yield put({ type: SET_ADDRESS, payload: result.results[0].locations[0] });
    }
}

export default function* () {
    yield takeLatest(GET_ADDRESS, getAddress)
}