import { all } from 'redux-saga/effects';

import userSaga from './user.saga';
import offerSaga from './offers.saga';

export default function* rootSaga() {
    yield all([
        userSaga(),
        offerSaga(),
    ]);
}