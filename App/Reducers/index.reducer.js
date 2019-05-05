import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import offersReducer from './offers.reducer';
import restaurantsReducer from './restaurants.reducer';
import restaurantDetailReducer from './restaurantDetail.reducer';

const rootReducer = combineReducers({
    user: userReducer,
    offers: offersReducer,
    restaurants: restaurantsReducer,
    restaurant: restaurantDetailReducer
});

export default rootReducer;