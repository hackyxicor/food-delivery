import { all } from 'redux-saga/effects';

import userSaga from './user.saga';
import offerSaga from './offers.saga';
import restaurantsSaga from './restaurants.saga';
import restaurantDetailSaga from './restaurantDetail.saga';
import addressSaga from './address.saga';

export default function* rootSaga() {
    yield all([
        userSaga(),
        offerSaga(),
        restaurantsSaga(),
        restaurantDetailSaga(),
        addressSaga(),
    ]);
}