import { put, takeLatest } from 'redux-saga/effects';
import { GET_USER, SET_USER } from '../Constants/action.constants';

import PrivateApi from '../Api/private.api';

import { resetToScreen } from '../Services/navigation.service';
import { SetUserAction } from '../Actions/index.action';

function* getUser() {
    const result = yield PrivateApi.GetUser();
    if (result.success) {
        yield put(SetUserAction(result.response));
        resetToScreen('ResolveLocaiton');
    } else {
        resetToScreen('Login');
    }
}

export default function* () {
    yield takeLatest(GET_USER, getUser)
}