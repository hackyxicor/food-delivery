import { put, takeLatest } from 'redux-saga/effects';
import { GENERATE_OTP, GENERATE_OTP_LOADER } from '../Constants/action.constants';

import PublicApi from '../Api/public.api';

function* generateOTP() {
    yield put({ type: GENERATE_OTP_LOADER, payload: true });
    const result = yield PublicApi.GetOTP();
    yield put({ type: GENERATE_OTP_LOADER, payload: false });
    if (result.success) {
        
    }
}

export default function* () {
    yield takeLatest(GENERATE_OTP, generateOTP)
}